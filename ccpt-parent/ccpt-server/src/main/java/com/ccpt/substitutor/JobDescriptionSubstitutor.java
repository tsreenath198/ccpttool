package com.ccpt.substitutor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.AdditionalProperty;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.Consultant;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ConsultantService;
import com.ccpt.util.StrSubstitutor;

@Component
public class JobDescriptionSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private ConsultantService consultantService;

	@Override
	public String getType() {
		return "Job Description";
	}

	@Override
	public EmailContent generate(EmailTemplate emailTemplate, Map<String, String> params) throws Exception {
		Integer id = Integer.parseInt(params.get("cpId"));
		Integer cid = Integer.parseInt(params.get("cId"));
		Consultant consultant = consultantService.get(cid);
		ClientPosition clientPosition = clientPositionService.get(id);
		if (clientPosition != null) {
			Map<String, String> valuesMap = new HashMap<String, String>();
			String jd = appendTemplate(clientPosition);
			valuesMap.put("jd", jd);
			valuesMap.put("jobTitle", clientPosition.getRole());
			if (consultant != null) {
				valuesMap.put("consultantName", consultant.getFullname());
			} else {
				throw new Exception("consultant is null for given id:" + cid);
			}
			String templateSubject = emailTemplate.getSubject();
			String templateBody = emailTemplate.getDescription();
			String subject = StrSubstitutor.replace(templateSubject, valuesMap);
			String body = StrSubstitutor.replace(templateBody, valuesMap);
			EmailContent emailContent = new EmailContent();
			emailContent.setBody(body);
			emailContent.setSubject(subject);
			return emailContent;
		} else {
			throw new Exception("ClientPosition is null for given id:" + id);
		}
	}

	private String appendTemplate(ClientPosition clientPosition) {
		StringBuilder sb = new StringBuilder();
		sb.append("<table width=\"728\" border=\"1\" style=\"border-collapse : collapse\">");
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
		for (AdditionalProperty additionalProperty : propList) {
			if (additionalProperty.getName() != null) {
				sb.append("<tr>\r\n" + "<td width=\"199\">\r\n" + "<p><strong>" + additionalProperty.getName()
						+ "</strong></p>\r\n" + "</td>\r\n" + "<td width=\"529\">\r\n" + "<p>"
						+ additionalProperty.getValue() + "</p>\r\n" + "</td>\r\n" + "</tr>");
			}

		}

		sb.append("</tbody>");
		sb.append("</table>");
		String jd = sb.toString();
		return jd;
	}

	@Override
	public SMS generate(SmsTemplate template, Map<String, String> params) {
		return null;
	}

}
