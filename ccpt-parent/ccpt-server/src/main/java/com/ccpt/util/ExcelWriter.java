package com.ccpt.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.ccpt.model.Payment;

public class ExcelWriter {

	public static byte[] downloadExcel(Payment payment, HttpServletResponse httpServletResponse) throws IOException {

		@SuppressWarnings("resource")
		XSSFWorkbook workbook = new XSSFWorkbook();
		XSSFSheet sheet = workbook.createSheet("INVOICE");
		XSSFRow row;
		XSSFCell cell;
		XSSFFont font = workbook.createFont();
		font.setFontHeightInPoints((short) 10);
		font.setFontName("Arial Black");

		CellStyle cellStyle = workbook.createCellStyle();
		CreationHelper createHelper = workbook.getCreationHelper();
		cellStyle.setDataFormat(createHelper.createDataFormat().getFormat("dd/mm/yyyy"));

		// Set font into style
		XSSFCellStyle style = workbook.createCellStyle();
		style.setAlignment(XSSFCellStyle.ALIGN_CENTER);
		style.setFont(font);

		XSSFCellStyle style1 = workbook.createCellStyle();
		style1.setFont(font);

		row = sheet.createRow(1);
		cell = row.createCell(0);
		cell.setCellValue("TALENT CORNER HR SERVICES PVT LTD");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 1));
		sheet.setColumnWidth(1, 20000);

		row = sheet.createRow(2);
		cell = row.createCell(0);
		cell.setCellValue("GST NO. 27AACCT6635P1ZP");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(2, 2, 0, 1));
		sheet.setColumnWidth(2, 20000);

		row = sheet.createRow(3);
		cell = row.createCell(0);
		cell.setCellValue("CIN NO. U7491OMH2007PTC170340");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(3, 3, 0, 1));
		sheet.setColumnWidth(3, 20000);

		row = sheet.createRow(4);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(5);
		cell = row.createCell(0);
		cell.setCellValue("BILLING INTIMATION FORMAT");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(5, 5, 0, 1));
		sheet.setColumnWidth(5, 20000);

		row = sheet.createRow(6);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(7);
		cell = row.createCell(0);
		cell.setCellValue("Date");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(new Date());
		cell.setCellStyle(cellStyle);

		row = sheet.createRow(8);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(9);
		cell = row.createCell(0);
		cell.setCellValue("FROM");
		cell.setCellStyle(style1);

		row = sheet.createRow(10);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF BRANCH HEAD :");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue("SREENATH THATIKONDA");

		row = sheet.createRow(11);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF BRANCH LOCATION:");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue("NIZAMABAD");

		row = sheet.createRow(12);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(13);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF CANDIDATE");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getCandidateName());

		row = sheet.createRow(14);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(15);
		cell = row.createCell(0);
		cell.setCellValue("DESIGNATION");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getDesignation());

		row = sheet.createRow(16);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(17);
		cell = row.createCell(0);
		cell.setCellValue("DATE OF JOINING");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getJoiningDate());
		cell.setCellStyle(cellStyle);

		row = sheet.createRow(18);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(19);
		cell = row.createCell(0);
		cell.setCellValue("ANNUAL PACKAGE");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getAnnualPackage());

		row = sheet.createRow(20);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(21);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF COMPANY");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getCompanyName());

		row = sheet.createRow(22);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(23);
		cell = row.createCell(0);
		cell.setCellValue("COMPANY GST No.");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getCompanyGstNum());

		row = sheet.createRow(24);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(25);
		cell = row.createCell(0);
		cell.setCellValue("COMPANY WEBSITE URL");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getCompanyWebsite());

		row = sheet.createRow(26);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(27);
		cell = row.createCell(0);
		cell.setCellValue("BILLING ADDRESS With PINCODE");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getBillingAddress());

		row = sheet.createRow(28);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(29);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getContactPerson());

		row = sheet.createRow(30);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(31);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON DESIGNATION");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getContactPersonDesignation());

		row = sheet.createRow(32);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(33);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON CONTACT NO");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getContactPersonNum());

		row = sheet.createRow(34);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(35);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON EMAIL ID");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getContactPersonEmail());

		row = sheet.createRow(36);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(37);
		cell = row.createCell(0);
		cell.setCellValue("SERVICE CHARGE");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getServiceCharge());

		row = sheet.createRow(38);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(39);
		cell = row.createCell(0);
		cell.setCellValue("CREDIT PERIOD");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getCreditPeriod());

		row = sheet.createRow(40);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(41);
		cell = row.createCell(0);
		cell.setCellValue("GUARANTEE PERIOD");
		cell.setCellStyle(style1);
		cell = row.createCell(1);
		cell.setCellValue(payment.getGauranteePeriod());

		row = sheet.createRow(42);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(43);
		cell = row.createCell(0);
		cell.setCellValue("KINDLY SEND THE BIF  EMAIL TO ");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(43, 43, 0, 1));

		row = sheet.createRow(44);
		cell = row.createCell(0);
		cell.setCellValue("rasheshdoshi@tcmail.co.in AND accounts@talentcorner.in.");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(44, 44, 0, 1));

		row = sheet.createRow(45);
		cell = row.createCell(0);
		cell.setCellValue("We will create the invoice within 48 hours and send it to the client.");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(45, 45, 0, 1));

		ByteArrayOutputStream os = new ByteArrayOutputStream();
		workbook.write(os);
		byte[] bytes = os.toByteArray();
		return bytes;
	}

}
