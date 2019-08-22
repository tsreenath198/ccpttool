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
		LocalDate localDate = LocalDate.now();
		switch (days) {
		case 1:
			day.setStartDate(calenderToDate());
			break;
		case 7:
			day.setStartDate(strToDate(localDate.with(TemporalAdjusters.previous(DayOfWeek.MONDAY)).toString()));
			break;
		case 30:
			day.setStartDate(strToDate(localDate.withDayOfMonth(1).toString()));
			break;
		case 365:
			day.setStartDate(strToDate(localDate.withDayOfYear(1).toString()));
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
