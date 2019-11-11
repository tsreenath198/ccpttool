package com.ccpt.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.xml.bind.ValidationException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.BACKUP)
public class BackupController {

	@Value("${spring.datasource.driver}")
	private String driver;

	@Value("${spring.datasource.username}")
	private String username;

	@Value("${spring.datasource.password}")
	private String password;

	@Value("${spring.datasource.url}")
	private String url;

	@GetMapping("/backup")
	public ResponseEntity<String> backUp() throws SQLException, ValidationException {
		String[] tables = { "additional_property", "client", "client_application", "client_application_status",
				"client_call_history", "client_contact", "client_position", "client_position_status", "consultant",
				"consultant_call_history", "consultant_status", "email_content", "email_template", "login",
				"other_contact", "payment", "position_summary", "question", "recruiter", "search", "sms",
				"sms_template", "upload_file" };
		Connection from = null, to = null;
		try {
			from = getSourceConnection(username, password, url, driver);
			to = getDestinationConnection(username, password, url, driver);
			for (int i = 0; i < tables.length; i++) {
				String table = tables[i];
				copy(table, from, to);
				System.out.println(table + " table copied successfully");
			}

		} catch (Exception e) {
			throw new ValidationException("Exception Occur While BackUp " + e.getMessage());
		} finally {
			from.close();
			to.close();
		}
		return new ResponseEntity<String>("Successfully done backup", HttpStatus.OK);
	}

	private static Connection getDestinationConnection(String username, String password, String url, String driver)
			throws Exception {
		url = "jdbc:mysql://192.185.129.64:3306/uskcorpi_ccpt_db";
		username = "uskcorpi_ccpt";
		password = "Infosys@123";

		Class.forName(driver);
		Connection conn = DriverManager.getConnection(url, username, password);
		return conn;
	}

	private Connection getSourceConnection(String username, String password, String url, String driver)
			throws Exception {
		Class.forName(driver);
		Connection conn = DriverManager.getConnection(url, username, password);
		return conn;
	}

	private static void copy(String table, Connection from, Connection to) throws SQLException {
		Statement stmt = null;
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

}
