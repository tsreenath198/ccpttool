package com.ccpt.substitutor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.ccpt.model.AdditionalProperty;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.ClientPositionService;
import com.ccpt.util.StrSubstitutor;

@Component
public class JobDescriptionSubstitutor implements ContentSubstitutor {
	@Value("${spring.mail.bcc}")
	private String bcc;
	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public String getType() {
		return "Job Description";
	}

	@Override
	public EmailContent generate(EmailTemplate emailTemplate, Map<String, String> params) throws Exception {
		Integer id = Integer.parseInt(params.get("cpId"));
		ClientPosition clientPosition = clientPositionService.get(id, true);
		if (clientPosition != null) {
			Map<String, String> valuesMap = new HashMap<String, String>();
			String jd = appendTemplate(clientPosition);

			valuesMap.put("jd", jd);
			valuesMap.put("clientName", clientPosition.getClient().getName());
			if (clientPosition.getLocation() != null) {
				valuesMap.put("location", clientPosition.getLocation());
			}
			if (clientPosition.getClient().getName() != null) {
				valuesMap.put("clientName", clientPosition.getClient().getName());
			}
			valuesMap.put("jobTitle", clientPosition.getRole());
			String templateSubject = emailTemplate.getSubject();
			String templateBody = emailTemplate.getDescription();
			String subject = StrSubstitutor.replace(templateSubject, valuesMap);
			String body = StrSubstitutor.replace(templateBody, valuesMap);
			EmailContent emailContent = new EmailContent();
			emailContent.setBody(body);
			emailContent.setSubject(subject);
			emailContent.setBcc(bcc);
			return emailContent;
		} else {
			throw new Exception("ClientPosition is null for given id:" + id);
		}
	}

	public static String appendTemplate(ClientPosition clientPosition) {
		StringBuilder sb = new StringBuilder();
		sb.append("<p>");
		sb.append(
				"<table width=\"728\" border=\"1\" style=\"border-collapse : collapse\" cellspacing=\"0\" cellpadding=\"0\">");
		sb.append("<tbody>");
		sb.append("<tr>\r\n" + "<td colspan=\"2\" width=\"728\" >\r\n" + "<p><strong>JOB DESCRIPTION</strong></p>\r\n"
				+ "</td>\r\n" + "</tr>");
		if (clientPosition.getClient().getName() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Company Name</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getClient().getName() + "</p>\r\n" + "</td>\r\n"
					+ "</tr>");
		}
		if (clientPosition.getRole() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Requirement</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getRole() + "</p>\r\n" + "</td>\r\n" + "</tr>");
		}
		if (clientPosition.getExperience() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Experience</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getExperience() + "</p>\r\n" + "</td>\r\n"
					+ "</tr>");
		}
		if (clientPosition.getLocation() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Work Location</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getLocation() + "</p>\r\n" + "</td>\r\n"
					+ "</tr>");
		}

		if (clientPosition.getMinCtc() != null && clientPosition.getMaxCtc() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>CTC offered</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getMinCtc() + "-" + clientPosition.getMaxCtc()
					+ "</p>\r\n" + "</td>\r\n" + "</tr>");
		}
		if (clientPosition.getJobType() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Job Type</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getJobType() + "</p>\r\n" + "</td>\r\n"
					+ "</tr>");
		}
		if (clientPosition.getDescription() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Job Description</strong></p>\r\n"
					+ "</td>\r\n" + "<td width=\"529\">\r\n" + "<p>" + clientPosition.getDescription() + "</p>\r\n"
					+ "</td>\r\n" + "</tr>");
		}
		if (clientPosition.getRequiredSkills() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Mandatory Key skills</strong></p>\r\n"
					+ "</td>\r\n" + "<td width=\"529\">\r\n" + "<p>" + clientPosition.getRequiredSkills() + "</p>\r\n"
					+ "</td>\r\n" + "</tr>");
		}
		if (clientPosition.getQualification() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Qualification</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getQualification() + "</p>\r\n" + "</td>\r\n"
					+ "</tr>");
		}
		if (clientPosition.getAvailability() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Notice period</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getAvailability() + "</p>\r\n" + "</td>\r\n"
					+ "</tr>");
		}
		if (clientPosition.getRequiredPositions() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Vacancies</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getRequiredPositions() + "</p>\r\n"
					+ "</td>\r\n" + "</tr>");

		}
		if (clientPosition.getClient().getWebsite() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Website</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientPosition.getClient().getWebsite() + "</p>\r\n"
					+ "</td>\r\n" + "</tr>");
		}
		List<AdditionalProperty> propList = clientPosition.getProperties();
		if (propList != null) {
			for (AdditionalProperty additionalProperty : propList) {
				if (additionalProperty.getName() != null) {
					sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>" + additionalProperty.getName()
							+ "</strong></p>\r\n" + "</td>\r\n" + "<td width=\"529\">\r\n" + "<p>"
							+ additionalProperty.getValue() + "</p>\r\n" + "</td>\r\n" + "</tr>");
				}

			}
		}
		sb.append("</tbody>");
		sb.append("</table>");
		getSign(sb);
		String jd = sb.toString();
		return jd;
	}

	public static String getSign(StringBuilder sb) {
		sb.append("<p>");
		sb.append("<br>");
		sb.append("<table>");
		sb.append("<tbody>");
		sb.append("<tr><td><b>Thanks &amp; Regards</b></td></tr>");
		sb.append("<tr><td><b>Sreenath Thatikonda</b></td></tr>");
		sb.append("<tr><td>Branch&nbsp;Head</td></tr>");
		sb.append(
				"<tr><td style=\"font-size: 11.0pt;font-family: 'Calibri',sans-serif;color: #1f497d;\">Talent Corner HR Services Pvt. Ltd.</td></tr>");
		sb.append(
				"<tr><td style=\"font-size: 11.0pt;font-family: 'Calibri',sans-serif;color: #1f497d;\">(D) 9848071296 &nbsp; (W)&nbsp;<a href=\"http://www.talentcorner.in/\" data-saferedirecturl=\"https://www.google.com/url?q=http://www.talentcorner.in/&amp;source=gmail&amp;ust=1563428769215000&amp;usg=AFQjCNFet2kPL5oLLvDUSpWHxioT4LijGA\">www.talentcorner.in</a>&nbsp;(E)&nbsp;<a href=\"mailto:sreenath.t@talentcorner.in\">sreenath.t@talentcorner.in</a></td></tr>");
		sb.append("</tbody>\r\n" + "</table>");
		sb.append("<div style=\"font-size: 11.0pt;font-family: 'Calibri',sans-serif;color: #1f497d;\">\r\n"
				+ "	You can also follow us on Facebook &amp; Twitter. Just search for Talent Corner.\r\n" + "</div>");
		sb.append("<div style=\"font-size: 10.0pt;font-family: 'Calibri',sans-serif;color: #7030a0;\">\r\n"
				+ "<strong>Offices : |Mumbai||Gurgaon||Gujarat||Kota||Pune| |Banglore||Chennai| |Hyderabad||Ahmedabad||Kolkata|</strong></div>");
		sb.append(
				"<div style=\"font-size: 10.0pt;font-family: 'Calibri',sans-serif;color: #7030a0;\"><strong>Vision 2025</strong>: On&nbsp;<strong>1<sup>st</sup>&nbsp;January 2025</strong>, Talent Corner will be an Organization, having operations in&nbsp;<strong>10</strong>&nbsp;Countries, with&nbsp;<strong>100</strong>&nbsp;Offices &amp; a Team of&nbsp;<strong>1000</strong>&nbsp;People ,Successfully Executing<strong>10000</strong>&nbsp;Recruitment Assignments every Year. We would have recruited&nbsp;<strong>1,00,000</strong>&nbsp;People by then. For every Successful Recruitment we will invest Rs<strong>. 100</strong>&nbsp;towards Girl Child Education, thus by&nbsp;<strong>2025</strong>&nbsp;we would have educated&nbsp;<strong>1000</strong>&nbsp;Girls&rdquo;</div>");
		sb.append("</p>");
		return sb.toString();
	}

	@Override
	public SMS generate(SmsTemplate template, Map<String, String> params) {
		return null;
	}

	public static String appendCATemplate(ClientApplication clientApplication) {
		Map<String, String> valuesMap = new HashMap<String, String>();
		valuesMap.put("consultantName", clientApplication.getConsultant().getFullname());
		StringBuilder sbPara = new StringBuilder();
		sbPara.append("<br>").append("<p><strong>${consultantName}</strong></p>").append("<br>");
		String subject = StrSubstitutor.replace(sbPara.toString(), valuesMap);
		StringBuilder sb = new StringBuilder(subject);
		sb.append(
				"<table width=\"728\" border=\"1\" style=\"border-collapse : collapse\" cellspacing=\"0\" cellpadding=\"0\">");
		sb.append("<tbody>");
		String yrs = clientApplication.getConsultant().getExperienceYrs();
		String ms = clientApplication.getConsultant().getExperienceMonths();
		String totalExp = "";
		if (yrs != null) {
			if (!yrs.isEmpty()) {
				totalExp = totalExp.concat(yrs + " years ");
			}
		}
		if (ms != null) {
			if (!ms.isEmpty()) {
				totalExp = totalExp.concat(ms + " months");
			}
		}
		if (!totalExp.isEmpty()) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Total Exp</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + totalExp + "</p>\r\n" + "</td>\r\n" + "</tr>");
		}
		if (clientApplication.getConsultant().getCurrentCTC() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Current CTC</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientApplication.getConsultant().getCurrentCTC() + "</p>\r\n"
					+ "</td>\r\n" + "</tr>");
		}
		if (clientApplication.getConsultant().getExpectedCTC() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Expected CTC</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientApplication.getConsultant().getExpectedCTC() + "</p>\r\n"
					+ "</td>\r\n" + "</tr>");
		}
		if (clientApplication.getConsultant().getCurrentLocation() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Residing Location - specific</strong></p>\r\n"
					+ "</td>\r\n" + "<td width=\"529\">\r\n" + "<p>"
					+ clientApplication.getConsultant().getCurrentLocation() + "</p>\r\n" + "</td>\r\n" + "</tr>");
		}
		if (clientApplication.getConsultant().getNoticePeriod() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Availability</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientApplication.getConsultant().getNoticePeriod()
					+ "</p>\r\n" + "</td>\r\n" + "</tr>");
		}
		if (clientApplication.getConsultant().getDescription() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Note</strong></p>\r\n" + "</td>\r\n"
					+ "<td width=\"529\">\r\n" + "<p>" + clientApplication.getConsultant().getDescription() + "</p>\r\n"
					+ "</td>\r\n" + "</tr>");
		}
		if (clientApplication.getConsultant().getCurrentCompany() != null) {
			sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Current Company</strong></p>\r\n"
					+ "</td>\r\n" + "<td width=\"529\">\r\n" + "<p>"
					+ clientApplication.getConsultant().getCurrentCompany() + "</p>\r\n" + "</td>\r\n" + "</tr>");
		}
		if (clientApplication.getClientPosition().getClient().isShareContactInfo()) {
			if (clientApplication.getConsultant().getPhone() != null) {
				sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Phone</strong></p>\r\n" + "</td>\r\n"
						+ "<td width=\"529\">\r\n" + "<p>" + clientApplication.getConsultant().getPhone() + "</p>\r\n"
						+ "</td>\r\n" + "</tr>");
			}
			if (clientApplication.getConsultant().getEmail() != null) {
				sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>Email</strong></p>\r\n" + "</td>\r\n"
						+ "<td width=\"529\">\r\n" + "<p>" + clientApplication.getConsultant().getEmail() + "</p>\r\n"
						+ "</td>\r\n" + "</tr>");
			}
		}
		sb.append("</tbody>");
		sb.append("</table>");
		return sb.toString();
	}

}
