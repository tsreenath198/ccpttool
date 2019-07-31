package com.ccpt.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.mail.BodyPart;
import javax.mail.internet.MimeBodyPart;

public class InvitationEmail {

	// define somewhere the icalendar date format
	private static SimpleDateFormat iCalendarDateFormat = new SimpleDateFormat("yyyyMMdd'T'HHmm'00'");

	public static BodyPart buildCalendarPart() throws Exception {

		BodyPart calendarPart = new MimeBodyPart();

		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, 31);
		Date start = cal.getTime();
		cal.add(Calendar.HOUR_OF_DAY, 4);
		cal.add(Calendar.MINUTE, 45);
		Date end = cal.getTime();

		// check the icalendar spec in order to build a more complicated meeting
		// request
		String calendarContent = "BEGIN:VCALENDAR\n" + "METHOD:REQUEST\n" + "PRODID: BCP - Meeting\n" + "VERSION:2.0\n"
				+ "BEGIN:VEVENT\n" + "DTSTAMP:" + iCalendarDateFormat.format(start) + "\n" + "DTSTART:"
				+ iCalendarDateFormat.format(start) + "\n" + "DTEND:" + iCalendarDateFormat.format(end) + "\n"
				+ "SUMMARY:test request\n" + "UID:324\n"
				+ "ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:MAILTO:organizer@yahoo.com\n"
				+ "ORGANIZER:MAILTO:organizer@yahoo.com\n" + "LOCATION:on the net\n" + "DESCRIPTION:learn some stuff\n"
				+ "SEQUENCE:0\n" + "PRIORITY:5\n" + "CLASS:PUBLIC\n" + "STATUS:CONFIRMED\n" + "TRANSP:OPAQUE\n"
				+ "BEGIN:VALARM\n" + "ACTION:DISPLAY\n" + "DESCRIPTION:REMINDER\n"
				+ "TRIGGER;RELATED=START:-PT00H15M00S\n" + "END:VALARM\n" + "END:VEVENT\n" + "END:VCALENDAR";

		calendarPart.addHeader("Content-Class", "urn:content-classes:calendarmessage");
		calendarPart.setContent(calendarContent, "text/calendar;method=CANCEL");

		return calendarPart;
	}
}
