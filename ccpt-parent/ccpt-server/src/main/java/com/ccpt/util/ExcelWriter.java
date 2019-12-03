package com.ccpt.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.util.CellRangeAddress;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.ccpt.model.Payment;

@SuppressWarnings("deprecation")
public class ExcelWriter {

	public static byte[] downloadExcel(Payment payment, HttpServletResponse httpServletResponse) throws IOException {
		@SuppressWarnings("resource")
		XSSFWorkbook workbook = new XSSFWorkbook();
		XSSFSheet sheet = workbook.createSheet("INVOICE");
		sheet.setColumnWidth(1, 4000);
		sheet.setColumnWidth(2, 4000);
		sheet.setColumnWidth(3, 4000);
		sheet.setColumnWidth(4, 4000);
		sheet.setColumnWidth(5, 4000);
		sheet.setColumnWidth(6, 4000);
		XSSFRow row;
		XSSFCell cell;
		XSSFFont font = workbook.createFont();
		font.setFontHeightInPoints((short) 11);
		font.setBold(true);
		font.setFontName("Calibri");

		CellStyle cellStyle = workbook.createCellStyle();
		CreationHelper createHelper = workbook.getCreationHelper();
		cellStyle.setDataFormat(createHelper.createDataFormat().getFormat("dd/mm/yyyy"));

		// Set font into style
		XSSFCellStyle style = workbook.createCellStyle();
		style.setAlignment(XSSFCellStyle.ALIGN_CENTER);

		XSSFCellStyle style1 = workbook.createCellStyle();
		style1.setFont(font);

		XSSFCellStyle style2 = workbook.createCellStyle();
		style2.setAlignment(XSSFCellStyle.ALIGN_CENTER);
		style2.setFont(font);

		row = sheet.createRow(1);
		cell = row.createCell(0);
		cell.setCellValue("TALENT CORNER HR SERVICES PVT LTD");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 5));
		cell.setCellStyle(style2);

		row = sheet.createRow(2);
		cell = row.createCell(0);
		cell.setCellValue("GST NO. 27AACCT6635P1ZP");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(2, 2, 0, 5));
		cell.setCellStyle(style2);

		row = sheet.createRow(3);
		cell = row.createCell(0);
		cell.setCellValue("CIN NO. U7491OMH2007PTC170340");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(3, 3, 0, 5));
		cell.setCellStyle(style2);

		row = sheet.createRow(4);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(5);
		cell = row.createCell(0);
		cell.setCellValue("BILLING INTIMATION FORMAT");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(5, 5, 0, 5));
		cell.setCellStyle(style2);

		row = sheet.createRow(6);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(7);
		cell = row.createCell(3);
		cell.setCellValue("Date");
		sheet.addMergedRegion(new CellRangeAddress(7, 7, 3, 3));
		cell.setCellStyle(style1);
		cell = row.createCell(4);
		cell.setCellValue(new Date());
		cell.setCellStyle(cellStyle);
		sheet.addMergedRegion(new CellRangeAddress(7, 7, 4, 5));

		row = sheet.createRow(8);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(9);
		cell = row.createCell(0);
		cell.setCellValue("FROM");
		cell.setCellStyle(style1);
		sheet.addMergedRegion(new CellRangeAddress(9, 9, 0, 2));

		row = sheet.createRow(10);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF BRANCH HEAD :");
		sheet.addMergedRegion(new CellRangeAddress(10, 10, 0, 2));
		cell.setCellStyle(style1);

		cell = row.createCell(3);
		cell.setCellValue("SREENATH THATIKONDA");
		sheet.addMergedRegion(new CellRangeAddress(10, 10, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(11);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF BRANCH LOCATION:");
		sheet.addMergedRegion(new CellRangeAddress(11, 11, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue("NIZAMABAD");
		sheet.addMergedRegion(new CellRangeAddress(11, 11, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(12);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(13);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF CANDIDATE");
		sheet.addMergedRegion(new CellRangeAddress(13, 13, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCandidateName());
		sheet.addMergedRegion(new CellRangeAddress(13, 13, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(14);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(15);
		cell = row.createCell(0);
		cell.setCellValue("DESIGNATION");
		sheet.addMergedRegion(new CellRangeAddress(15, 15, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getDesignation());
		sheet.addMergedRegion(new CellRangeAddress(15, 15, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(16);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(17);
		cell = row.createCell(0);
		cell.setCellValue("DATE OF JOINING");
		sheet.addMergedRegion(new CellRangeAddress(17, 17, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getJoiningDate());
		cell.setCellStyle(cellStyle);
		sheet.addMergedRegion(new CellRangeAddress(17, 17, 3, 5));
		row = sheet.createRow(18);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(19);
		cell = row.createCell(0);
		cell.setCellValue("ANNUAL PACKAGE");
		sheet.addMergedRegion(new CellRangeAddress(19, 19, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getAnnualPackage());
		sheet.addMergedRegion(new CellRangeAddress(19, 19, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(20);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(21);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF COMPANY");
		sheet.addMergedRegion(new CellRangeAddress(21, 21, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCompanyName());
		sheet.addMergedRegion(new CellRangeAddress(21, 21, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(22);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(23);
		cell = row.createCell(0);
		cell.setCellValue("COMPANY GST No.");
		sheet.addMergedRegion(new CellRangeAddress(23, 23, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCompanyGstNum());
		sheet.addMergedRegion(new CellRangeAddress(23, 23, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(24);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(25);
		cell = row.createCell(0);
		cell.setCellValue("COMPANY WEBSITE URL");
		sheet.addMergedRegion(new CellRangeAddress(25, 25, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCompanyWebsite());
		sheet.addMergedRegion(new CellRangeAddress(25, 25, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(26);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(27);
		cell = row.createCell(0);
		cell.setCellValue("BILLING ADDRESS With PINCODE");
		sheet.addMergedRegion(new CellRangeAddress(27, 27, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getBillingAddress());
		sheet.addMergedRegion(new CellRangeAddress(27, 27, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(28);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(29);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON");
		sheet.addMergedRegion(new CellRangeAddress(29, 29, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPerson());
		sheet.addMergedRegion(new CellRangeAddress(29, 29, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(30);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(31);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON DESIGNATION");
		sheet.addMergedRegion(new CellRangeAddress(31, 31, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPersonDesignation());
		sheet.addMergedRegion(new CellRangeAddress(31, 31, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(32);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(33);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON CONTACT NO");
		sheet.addMergedRegion(new CellRangeAddress(33, 33, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPersonNum());
		sheet.addMergedRegion(new CellRangeAddress(33, 33, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(34);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(35);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON EMAIL ID");
		sheet.addMergedRegion(new CellRangeAddress(35, 35, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPersonEmail());
		sheet.addMergedRegion(new CellRangeAddress(35, 35, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(36);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(37);
		cell = row.createCell(0);
		cell.setCellValue("SERVICE CHARGE");
		sheet.addMergedRegion(new CellRangeAddress(37, 37, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getServiceCharge());
		sheet.addMergedRegion(new CellRangeAddress(37, 37, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(38);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(39);
		cell = row.createCell(0);
		cell.setCellValue("CREDIT PERIOD");
		sheet.addMergedRegion(new CellRangeAddress(39, 39, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCreditPeriod());
		sheet.addMergedRegion(new CellRangeAddress(39, 39, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(40);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(41);
		cell = row.createCell(0);
		cell.setCellValue("GUARANTEE PERIOD");
		sheet.addMergedRegion(new CellRangeAddress(41, 41, 0, 2));
		cell.setCellStyle(style1);
		cell = row.createCell(3);
		cell.setCellValue(payment.getGauranteePeriod());
		sheet.addMergedRegion(new CellRangeAddress(41, 41, 3, 5));
		cell.setCellStyle(style);

		row = sheet.createRow(42);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(43);
		cell = row.createCell(0);
		cell.setCellValue("KINDLY SEND THE BIF  EMAIL TO ");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(43, 43, 0, 5));
		cell.setCellStyle(style2);

		row = sheet.createRow(44);
		cell = row.createCell(0);
		cell.setCellValue("rasheshdoshi@tcmail.co.in AND accounts@talentcorner.in.");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(44, 44, 0, 5));
		cell.setCellStyle(style2);

		row = sheet.createRow(45);
		cell = row.createCell(0);
		cell.setCellValue("We will create the invoice within 48 hours and send it to the client.");
		cell.setCellStyle(style);
		sheet.addMergedRegion(new CellRangeAddress(45, 45, 0, 5));
		cell.setCellStyle(style2);

		ByteArrayOutputStream os = new ByteArrayOutputStream();
		workbook.write(os);
		byte[] bytes = os.toByteArray();
		return bytes;
	}

}
