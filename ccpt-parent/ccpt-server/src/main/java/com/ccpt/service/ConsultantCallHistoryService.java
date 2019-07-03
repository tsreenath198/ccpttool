package com.ccpt.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.model.Day;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantCallHistoryRepository;

@Service
public class ConsultantCallHistoryService extends BaseService<ConsultantCallHistory, Integer> {
	public ConsultantCallHistoryService() {
		super("Consultant Call History");
	}

	@Autowired
	private ConsultantCallHistoryRepository consultantCallHistoryRepository;

	public List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Integer days)
			throws ParseException {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getAllConsultantCallHistorysFromLastGivenDays(day.getStartDate(),
				day.getEndDate(), true);
	}

	public List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(Integer days) throws ParseException {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getClosedCountOfAllRecruitersFromLastGivenDays(day.getStartDate(),
				day.getEndDate());
	}

	@Override
	public BaseRepository<ConsultantCallHistory, Integer> getRepository() {
		return consultantCallHistoryRepository;
	}

	public List<CallHistorySummaryStatistics> getAllconCHCountByRecruiters(Integer days) throws ParseException {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getAllconCHCountByRecruiters(day.getStartDate(), day.getEndDate());
	}

	public List<ConsultantCallHistory> getAllconCHByRecruiterId(Integer rId, Integer days) throws ParseException {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getAllconCHByRecruiterId(rId, day.getStartDate(), day.getEndDate(),
				true);
	}

	public Day getDays(Integer days) throws ParseException {
		Day day = new Day();
		LocalDate localDate = LocalDate.now();
		if (days == 1) {
			java.util.Date utilDate = calenderToDate();
			day.setStartDate(utilDate);
		}
		// 2019-07-01
		if (days == 7) {
			Date date = strToDate(localDate.with(TemporalAdjusters.previous(DayOfWeek.MONDAY)).toString());
			day.setStartDate(date);
		}
		if (days == 30) {
			Date date = strToDate(localDate.withDayOfMonth(1).toString());
			day.setStartDate(date);
		}
		if (days == 365) {
			Date date = strToDate(localDate.withDayOfYear(1).toString());
			day.setStartDate(date);
		}
		day.setEndDate(new Date());
		return day;
	}

	private Date strToDate(String dt) throws ParseException {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		Date date = formatter.parse(dt);
		return date;
	}

	private Date calenderToDate() {
		Calendar date = new GregorianCalendar();
		date.set(Calendar.HOUR_OF_DAY, 0);
		date.set(Calendar.MINUTE, 0);
		date.set(Calendar.SECOND, 0);
		date.set(Calendar.MILLISECOND, 0);
		java.util.Date ud = date.getTime();
		return ud;
	}

}
