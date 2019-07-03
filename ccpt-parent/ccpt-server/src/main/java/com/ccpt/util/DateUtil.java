package com.ccpt.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import com.ccpt.model.Day;

public class DateUtil {
	public static Day getDays(Integer days) throws ParseException {
		Day day = new Day();
		Date date;
		LocalDate localDate = LocalDate.now();
		switch (days) {
		case 1:
			java.util.Date utilDate = calenderToDate();
			day.setStartDate(utilDate);
			break;
		case 7:
			date = strToDate(localDate.with(TemporalAdjusters.previous(DayOfWeek.MONDAY)).toString());
			day.setStartDate(date);
			break;
		case 30:
			date = strToDate(localDate.withDayOfMonth(1).toString());
			day.setStartDate(date);
			break;
		case 365:
			date = strToDate(localDate.withDayOfYear(1).toString());
			day.setStartDate(date);
			break;

		}
		day.setEndDate(new Date());
		return day;
	}

	private static Date strToDate(String dt) throws ParseException {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date = formatter.parse(dt);
		return date;
	}

	private static Date calenderToDate() {
		Calendar date = new GregorianCalendar();
		date.set(Calendar.HOUR_OF_DAY, 0);
		date.set(Calendar.MINUTE, 0);
		date.set(Calendar.SECOND, 0);
		date.set(Calendar.MILLISECOND, 0);
		java.util.Date ud = date.getTime();
		return ud;
	}
}
