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
		sheet.setColumnWidth(2, 4000);
		sheet.setColumnWidth(4, 4000);
		sheet.setColumnWidth(5, 7000);
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
		XSSFCellStyle cellValue = workbook.createCellStyle();
		cellValue.setAlignment(XSSFCellStyle.ALIGN_CENTER);

		XSSFCellStyle cellLabel = workbook.createCellStyle();
		cellLabel.setFont(font);

		XSSFCellStyle sheetHeader = workbook.createCellStyle();
		sheetHeader.setAlignment(XSSFCellStyle.ALIGN_CENTER);
		sheetHeader.setFont(font);

		row = sheet.createRow(0);
		cell = row.createCell(0);
		cell.setCellValue("TALENT CORNER HR SERVICES PVT LTD");
		sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, 5));
		cell.setCellStyle(sheetHeader);

		row = sheet.createRow(1);
		cell = row.createCell(0);
		cell.setCellValue("GST NO. 27AACCT6635P1ZP");
		sheet.addMergedRegion(new CellRangeAddress(1, 1, 0, 5));
		cell.setCellStyle(sheetHeader);

		row = sheet.createRow(2);
		cell = row.createCell(0);
		cell.setCellValue("CIN NO. U7491OMH2007PTC170340");
		sheet.addMergedRegion(new CellRangeAddress(2, 2, 0, 5));
		cell.setCellStyle(sheetHeader);

		row = sheet.createRow(3);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(4);
		cell = row.createCell(0);
		cell.setCellValue("BILLING INTIMATION FORMAT");
		sheet.addMergedRegion(new CellRangeAddress(4, 4, 0, 5));
		cell.setCellStyle(sheetHeader);

		row = sheet.createRow(5);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(6);
		cell = row.createCell(3);
		cell.setCellValue("Date");
		sheet.addMergedRegion(new CellRangeAddress(6, 6, 3, 3));
		// cell.setCellStyle(cellLabel);
		cell = row.createCell(4);
		cell.setCellValue(payment.getJoiningDate());
		// cell.setCellValue(new Date());
		cell.setCellStyle(cellStyle);
		sheet.addMergedRegion(new CellRangeAddress(6, 6, 4, 5));

		row = sheet.createRow(7);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(8);
		cell = row.createCell(0);
		cell.setCellValue("FROM");
		cell.setCellStyle(cellLabel);
		sheet.addMergedRegion(new CellRangeAddress(8, 8, 0, 2));

		row = sheet.createRow(9);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF BRANCH HEAD :");
		sheet.addMergedRegion(new CellRangeAddress(9, 9, 0, 2));
		cell.setCellStyle(cellLabel);

		cell = row.createCell(3);
		cell.setCellValue("SREENATH THATIKONDA");
		sheet.addMergedRegion(new CellRangeAddress(9, 9, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(10);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF BRANCH LOCATION:");
		sheet.addMergedRegion(new CellRangeAddress(10, 10, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue("NIZAMABAD");
		sheet.addMergedRegion(new CellRangeAddress(10, 10, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(11);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(12);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF CANDIDATE");
		sheet.addMergedRegion(new CellRangeAddress(12, 12, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCandidateName());
		sheet.addMergedRegion(new CellRangeAddress(12, 12, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(13);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(14);
		cell = row.createCell(0);
		cell.setCellValue("DESIGNATION");
		sheet.addMergedRegion(new CellRangeAddress(14, 14, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getDesignation());
		sheet.addMergedRegion(new CellRangeAddress(14, 14, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(15);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(16);
		cell = row.createCell(0);
		cell.setCellValue("DATE OF JOINING");
		sheet.addMergedRegion(new CellRangeAddress(16, 16, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getJoiningDate());
		cell.setCellStyle(cellStyle);
		sheet.addMergedRegion(new CellRangeAddress(16, 16, 3, 5));

		row = sheet.createRow(17);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(18);
		cell = row.createCell(0);
		cell.setCellValue("ANNUAL PACKAGE");
		sheet.addMergedRegion(new CellRangeAddress(18, 18, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getAnnualPackage());
		sheet.addMergedRegion(new CellRangeAddress(18, 18, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(19);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(20);
		cell = row.createCell(0);
		cell.setCellValue("NAME OF COMPANY");
		sheet.addMergedRegion(new CellRangeAddress(20, 20, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCompanyName());
		sheet.addMergedRegion(new CellRangeAddress(20, 20, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(21);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(22);
		cell = row.createCell(0);
		cell.setCellValue("COMPANY GST No.");
		sheet.addMergedRegion(new CellRangeAddress(22, 22, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCompanyGstNum());
		sheet.addMergedRegion(new CellRangeAddress(22, 22, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(23);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(24);
		cell = row.createCell(0);
		cell.setCellValue("COMPANY WEBSITE URL");
		sheet.addMergedRegion(new CellRangeAddress(24, 24, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCompanyWebsite());
		sheet.addMergedRegion(new CellRangeAddress(24, 24, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(25);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(26);
		cell = row.createCell(0);
		cell.setCellValue("BILLING ADDRESS With PINCODE");
		sheet.addMergedRegion(new CellRangeAddress(26, 26, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getBillingAddress());
		sheet.addMergedRegion(new CellRangeAddress(26, 26, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(27);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(28);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON");
		sheet.addMergedRegion(new CellRangeAddress(28, 28, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPerson());
		sheet.addMergedRegion(new CellRangeAddress(28, 28, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(29);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(30);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON DESIGNATION");
		sheet.addMergedRegion(new CellRangeAddress(30, 30, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPersonDesignation());
		sheet.addMergedRegion(new CellRangeAddress(30, 30, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(31);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(32);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON CONTACT NO");
		sheet.addMergedRegion(new CellRangeAddress(32, 32, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPersonNum());
		sheet.addMergedRegion(new CellRangeAddress(32, 32, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(33);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(34);
		cell = row.createCell(0);
		cell.setCellValue("CONTACT PERSON EMAIL ID");
		sheet.addMergedRegion(new CellRangeAddress(34, 34, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getContactPersonEmail());
		sheet.addMergedRegion(new CellRangeAddress(34, 34, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(35);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(36);
		cell = row.createCell(0);
		cell.setCellValue("SERVICE CHARGE");
		sheet.addMergedRegion(new CellRangeAddress(36, 36, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getServiceCharge());
		sheet.addMergedRegion(new CellRangeAddress(36, 36, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(37);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(38);
		cell = row.createCell(0);
		cell.setCellValue("CREDIT PERIOD");
		sheet.addMergedRegion(new CellRangeAddress(38, 38, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getCreditPeriod());
		sheet.addMergedRegion(new CellRangeAddress(38, 38, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(39);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(40);
		cell = row.createCell(0);
		cell.setCellValue("GUARANTEE PERIOD");
		sheet.addMergedRegion(new CellRangeAddress(40, 40, 0, 2));
		cell.setCellStyle(cellLabel);
		cell = row.createCell(3);
		cell.setCellValue(payment.getGauranteePeriod());
		sheet.addMergedRegion(new CellRangeAddress(40, 40, 3, 5));
		cell.setCellStyle(cellValue);

		row = sheet.createRow(41);
		row.createCell(0).setCellValue("");

		row = sheet.createRow(42);
		cell = row.createCell(0);
		cell.setCellValue("KINDLY SEND THE BIF  EMAIL TO ");
		sheet.addMergedRegion(new CellRangeAddress(42, 42, 0, 5));
		cell.setCellStyle(sheetHeader);

		row = sheet.createRow(43);
		cell = row.createCell(0);
		cell.setCellValue("rasheshdoshi@tcmail.co.in AND accounts@talentcorner.in.");
		sheet.addMergedRegion(new CellRangeAddress(43, 43, 0, 5));
		cell.setCellStyle(sheetHeader);

		row = sheet.createRow(44);
		cell = row.createCell(0);
		cell.setCellValue("We will create the invoice within 48 hours and send it to the client.");
		sheet.addMergedRegion(new CellRangeAddress(44, 44, 0, 5));
		cell.setCellStyle(sheetHeader);

		ByteArrayOutputStream os = new ByteArrayOutputStream();
		workbook.write(os);
		byte[] bytes = os.toByteArray();
		return bytes;
	}

}
