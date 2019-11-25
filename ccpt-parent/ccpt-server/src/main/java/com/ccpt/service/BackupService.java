package com.ccpt.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.xml.bind.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.ccpt.constants.BackupStatus;

@Service
public class BackupService {

	private static final String INSERT_BACKUP_SQL = "INSERT into backup (backup_date) VALUES (?)";

	@Value("${spring.datasource.driver}")
	private String driver;

	@Value("${spring.datasource.username}")
	private String username;

	@Value("${spring.datasource.password}")
	private String password;

	@Value("${spring.datasource.url}")
	private String url;

	@Value("${spring.datasource.prod_username}")
	private String prod_username;

	@Value("${spring.datasource.prod_password}")
	private String prod_password;

	@Value("${spring.datasource.prod_url}")
	private String prod_url;

	@Value("${spring.mail.username}")
	private String toEmail;

	@Autowired
	EmailService emailService;

	Connection from = null, to = null;
	Statement stmt = null;
	PreparedStatement statement = null;
	String response = null;

	public String backUp() throws SQLException, ValidationException {
		String[] tables = { "additional_property", "backup", "client", "client_application",
				"client_application_status", "client_call_history", "client_contact", "client_position",
				"client_position_status", "consultant", "consultant_call_history", "consultant_status", "email_content",
				"email_template", "industry_type", "login", "other_contact", "payment", "position_summary", "question",
				"recruiter", "search", "sms", "sms_template", "upload_file" };
		BackupStatus.startBackup();
		try {
			from = getDBConnection(username, password, url, driver);
			to = getDBConnection(prod_username, prod_password, prod_url, driver);
			for (int i = 0; i < tables.length; i++) {
				String table = tables[i];
				copy(table, from, to);
				System.out.println(table + " table copied successfully");
			}
			statement = from.prepareStatement(INSERT_BACKUP_SQL, Statement.RETURN_GENERATED_KEYS);
			Calendar cal = Calendar.getInstance();
			java.sql.Timestamp timestamp = new java.sql.Timestamp(cal.getTimeInMillis());
			statement.setTimestamp(1, timestamp);
			statement.executeUpdate();
			response = "Successfully done backup";
			emailService.sendmail(
					toEmail + ",pavan.uskcorp@gmail.com,anurag.uskcorp@gmail.com,gangasai.uskcorp@gmail.com",
					"BackUp----CCPT---SUCCESS", response);
		} catch (Exception e) {
			emailService.sendmail(
					toEmail + ",pavan.uskcorp@gmail.com,anurag.uskcorp@gmail.com,gangasai.uskcorp@gmail.com",
					"BackUp----CCPT---FAILED", "Backup is not Completed--Exception Occur While BackUp");
			throw new ValidationException("Exception Occur While BackUp " + e.getMessage());
		} finally {
			BackupStatus.finishBackup();
			from.close();
			to.close();
		}
		return response;
	}

	// Fire at 12am every 5 days every month
	// @Scheduled(cron = "0 0 0 1/5 * ?")
	public String backUpArchives() throws SQLException, ValidationException {
		String[] tables = { "additional_property", "client", "client_application", "client_application_status",
				"client_call_history", "client_contact", "client_position", "client_position_status", "consultant",
				"consultant_call_history", "consultant_status", "email_content", "email_template", "industry_type",
				"login", "other_contact", "payment", "position_summary", "question", "recruiter", "search", "sms",
				"sms_template", "upload_file" };
		BackupStatus.startBackup();
		try {
			from = getDBConnection(username, password, url, driver);
			to = getDBConnection(prod_username, prod_password, prod_url, driver);
			for (int i = 0; i < tables.length; i++) {
				String table = tables[i];
				update(table, from, to);
				System.out.println(table + " table updated successfully");
			}
			statement = to.prepareStatement(INSERT_BACKUP_SQL, Statement.RETURN_GENERATED_KEYS);
			Calendar cal = Calendar.getInstance();
			java.sql.Timestamp timestamp = new java.sql.Timestamp(cal.getTimeInMillis());
			statement.setTimestamp(1, timestamp);
			statement.executeUpdate();

			statement = from.prepareStatement(INSERT_BACKUP_SQL, Statement.RETURN_GENERATED_KEYS);
			statement.setTimestamp(1, timestamp);
			statement.executeUpdate();

			response = "Successfully  updated backup";
			toEmail = toEmail.concat(",pavan.uskcorp@gmail.com,anurag.uskcorp@gmail.com,gangasai.uskcorp@gmail.com");
			emailService.sendmail(toEmail, "BackUp----CCPT---SUCCESS", response);
		} catch (Exception e) {
			emailService.sendmail(
					toEmail + ",pavan.uskcorp@gmail.com,anurag.uskcorp@gmail.com,gangasai.uskcorp@gmail.com",
					"BackUp----CCPT---FAILED", "Backup is not Completed--Exception Occur While BackUp");
			throw new ValidationException("Exception Occur While BackUp " + e.getMessage());
		} finally {
			BackupStatus.finishBackup();
			from.close();
			to.close();
		}
		return response;
	}

	private Connection getDBConnection(String username, String password, String url, String driver) throws Exception {
		Class.forName(driver);
		Connection conn = DriverManager.getConnection(url, username, password);
		return conn;
	}

	private void copy(String table, Connection from, Connection to) throws SQLException {
		stmt = to.createStatement();
		String sql = "DELETE FROM " + table;
		System.out.println(table + " table deleted ");
		stmt.executeUpdate(sql);
		try (PreparedStatement s1 = from.prepareStatement("select * from " + table); ResultSet rs = s1.executeQuery()) {
			ResultSetMetaData meta = rs.getMetaData();
			List<String> columns = new ArrayList<>();
			for (int i = 1; i <= meta.getColumnCount(); i++)
				columns.add(meta.getColumnName(i));
			try (PreparedStatement s2 = to
					.prepareStatement("INSERT INTO " + table + " (" + columns.stream().collect(Collectors.joining(", "))
							+ ") VALUES (" + columns.stream().map(c -> "?").collect(Collectors.joining(", ")) + ")")) {
				while (rs.next()) {
					for (int i = 1; i <= meta.getColumnCount(); i++)
						s2.setObject(i, rs.getObject(i));
					s2.addBatch();
				}
				s2.executeBatch();
			}
		}
	}

	private void update(String table, Connection from, Connection to) throws SQLException, ParseException {

		Date lastUpdatedDate = getBackupDateFromSourceDB(from);
		if (lastUpdatedDate != null) {
			Calendar cal = Calendar.getInstance();
			cal.setTime(lastUpdatedDate);
			cal.add(Calendar.DATE, 0);
			lastUpdatedDate = cal.getTime();

		} else {
			String strDate = "2019-01-01 00:00:00";
			lastUpdatedDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(strDate);
		}
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String currentDate = dateFormat.format(getCurrentDateAndTime());
		String selectSQL = "select * from ".concat(table).concat(" where created_date BETWEEN ' ")
				.concat(dateFormat.format(lastUpdatedDate)).concat("' AND '").concat(currentDate).concat("'");
		System.out.println("sql:" + selectSQL);
		try (PreparedStatement s1 = from.prepareStatement(selectSQL); ResultSet rs = s1.executeQuery()) {
			ResultSetMetaData meta = rs.getMetaData();
			List<String> columns = new ArrayList<>();
			for (int i = 1; i <= meta.getColumnCount(); i++)
				columns.add(meta.getColumnName(i));
			try (PreparedStatement s2 = to
					.prepareStatement("INSERT INTO " + table + " (" + columns.stream().collect(Collectors.joining(", "))
							+ ") VALUES (" + columns.stream().map(c -> "?").collect(Collectors.joining(", ")) + ")")) {
				while (rs.next()) {
					for (int i = 1; i <= meta.getColumnCount(); i++)
						s2.setObject(i, rs.getObject(i));
					s2.addBatch();
				}
				s2.executeBatch();
			}
		}
	}

	private Date getBackupDateFromSourceDB(Connection conn) throws SQLException {
		stmt = conn.createStatement();
		Date date = null;
		String sql = "SELECT * FROM backup order by id DESC limit 1";
		ResultSet rs = stmt.executeQuery(sql);
		while (rs.next()) {
			Timestamp timestamp = rs.getTimestamp("backup_date");
			if (timestamp != null)
				date = new java.util.Date(timestamp.getTime());
		}
		return date;
	}

	private Date getCurrentDateAndTime() {
		final Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 0);
		return cal.getTime();
	}
}
