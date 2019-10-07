package com.ccpt.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import javax.persistence.EntityNotFoundException;
import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.ccpt.exception.CAException;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientContact;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.UploadFile;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.EmailTemplateRepository;
import com.ccpt.substitutor.JobDescriptionSubstitutor;
import com.ccpt.util.StrSubstitutor;

@Component
public class EmailTemplateService extends BaseService<EmailTemplate, Integer> {

	public EmailTemplateService() {
		super("Email Template");
	}

	@Value("${spring.mail.bcc}")
	private String bcc;

	@Autowired
	private UploadFileService uploadFileService;
	@Autowired
	private EmailTemplateRepository emailTemplateRepository;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Override
	public BaseRepository<EmailTemplate, Integer> getRepository() {
		return emailTemplateRepository;
	}

	public EmailTemplate getTemplateByType(String type) {
		Optional<EmailTemplate> template = emailTemplateRepository.findByType(type);
		if (template.isPresent()) {
			return template.get();
		} else {
			throw new EntityNotFoundException("No Email Template found for type : " + type);
		}
	}

	public EmailContent getClientApps(List<Integer> ids) throws Exception {
		EmailContent emailContent = new EmailContent();
		StringBuilder cc = null;
		StringBuilder body = new StringBuilder();
		List<String> names = new ArrayList<String>();
		List<UploadFile> files = new ArrayList<UploadFile>();
		List<ClientApplication> clientApplications = new ArrayList<ClientApplication>();
		Set<String> cpNames = new HashSet<String>();
		for (Integer id : ids) {
			Optional<ClientApplication> ca = clientApplicationRepository.findById(id);
			String name = ca.get().getClientPosition().getClient().getName();
			names.add(name);
			clientApplications.add(ca.get());

		}
		boolean allEqual = names.isEmpty() || names.stream().allMatch(names.get(0)::equals);
		if (allEqual) {
			StringBuilder sbPara = new StringBuilder();
			Map<String, String> valuesMap = new HashMap<String, String>();
			ClientPosition clientPosition = clientApplications.get(0).getClientPosition();
			valuesMap.put("jobTitle", clientPosition.getRole());
			valuesMap.put("clientContactName", clientPosition.getClient().getClientContacts().get(0).getFullname());
			if (clientPosition.getClient().getClientContacts().get(0).getSalutation().equalsIgnoreCase("Mr."))
				sbPara.append("<p>Hi ${clientContactName} sir</p>");
			else
				sbPara.append("<p>Hi ${clientContactName} mam</p>");
			if (ids.size() == 1)
				sbPara.append("<p> Below is the profile with ${jobTitle}  experience (CV Attached)</p>");
			else
				sbPara.append("<p> Below are the profiles with ${jobTitle}  experience (CVs Attached)</p>");
			sbPara.append("<p>").append("please go over the CVs and provide your feedback ASAP");

			String subject = StrSubstitutor.replace(sbPara.toString(), valuesMap);
			StringBuilder sb = new StringBuilder(subject);
			for (ClientApplication clientApplication : clientApplications) {
				cc = new StringBuilder();
				String template = JobDescriptionSubstitutor.appendCATemplate(clientApplication);
				UploadFile uploadedFile = uploadFileService.getByRefIdAndRefType(clientApplication.getId(), "CRF");
				if (uploadedFile != null)
					files.add(uploadedFile);
				else
					throw new CAException(clientApplication.getConsultant().getFullname() + " doesn't have crf file");
				body.append(template);
				String name = clientApplication.getClientPosition().getClient().getName();
				names.add(name);
				cpNames.add(clientApplication.getClientPosition().getRole());

				List<ClientContact> clientContacts = clientApplication.getClientPosition().getClient()
						.getClientContacts();
				if (clientContacts.size() != 1) {
					for (int i = 1; i < clientContacts.size(); i++) {
						cc.append(clientContacts.get(i).getEmail());
						if (i != clientContacts.size() - 1) {
							cc.append(",");
						}
					}
				}
			}
			emailContent.setBody(sb.toString().concat(JobDescriptionSubstitutor.getSign(body)));
			emailContent.setUploadFiles(files);
			emailContent.setToEmails(
					clientApplications.get(0).getClientPosition().getClient().getClientContacts().get(0).getEmail());
			emailContent.setSubject("CV for " + String.join(",", cpNames));

			emailContent.setCc(cc.toString());
			emailContent.setBcc(bcc);
			return emailContent;
		} else {
			throw new CAException("please select same client application ");
		}
	}

	public EmailContent getCAs(List<Integer> ids) throws Exception {
		EmailContent emailContent = new EmailContent();
		StringBuilder cc = null;
		StringBuilder body = new StringBuilder();
		List<String> names = new ArrayList<String>();
		List<UploadFile> files = new ArrayList<UploadFile>();
		List<ClientApplication> clientApplications = new ArrayList<ClientApplication>();
		Set<String> cpNames = new HashSet<String>();
		for (Integer id : ids) {
			Optional<ClientApplication> ca = clientApplicationRepository.findById(id);
			String name = ca.get().getClientPosition().getClient().getName();
			names.add(name);
			clientApplications.add(ca.get());

		}
		boolean allEqual = names.isEmpty() || names.stream().allMatch(names.get(0)::equals);
		if (allEqual) {
			StringBuilder sbPara = new StringBuilder();
			Map<String, String> valuesMap = new HashMap<String, String>();
			ClientPosition clientPosition = clientApplications.get(0).getClientPosition();
			valuesMap.put("jobTitle", clientPosition.getRole());
			valuesMap.put("clientContactName", clientPosition.getClient().getClientContacts().get(0).getFullname());
			if (clientPosition.getClient().getClientContacts().get(0).getSalutation().equalsIgnoreCase("Mr."))
				sbPara.append("<p>Hi ${clientContactName} sir</p>");
			else
				sbPara.append("<p>Hi ${clientContactName} mam</p>");
			if (ids.size() == 1)
				sbPara.append("<p> Below is the profile with ${jobTitle}  experience (CV Attached)</p>");
			else
				sbPara.append("<p> Below are the profiles with ${jobTitle}  experience (CVs Attached)</p>");
			sbPara.append("<p>");

			String subject = StrSubstitutor.replace(sbPara.toString(), valuesMap);
			StringBuilder sb = new StringBuilder(subject);
			for (ClientApplication clientApplication : clientApplications) {
				cc = new StringBuilder();
				String name = clientApplication.getClientPosition().getClient().getName();
				names.add(name);
				cpNames.add(clientApplication.getClientPosition().getRole());

				List<ClientContact> clientContacts = clientApplication.getClientPosition().getClient()
						.getClientContacts();
				if (clientContacts.size() != 1) {
					for (int i = 1; i < clientContacts.size(); i++) {
						cc.append(clientContacts.get(i).getEmail());
						if (i != clientContacts.size() - 1) {
							cc.append(",");
						}
					}
				}
			}
			String template = appendTemplate(clientApplications);
			body.append(template);
			emailContent.setBody(sb.toString().concat(JobDescriptionSubstitutor.getSign(body)));
			emailContent.setUploadFiles(files);
			emailContent.setToEmails(
					clientApplications.get(0).getClientPosition().getClient().getClientContacts().get(0).getEmail());
			emailContent.setSubject("Reqd update on CVs");
			emailContent.setCc(cc.toString());
			emailContent.setBcc(bcc);
			return emailContent;
		} else {
			throw new CAException("please select same client application ");
		}
	}

	public static String appendTemplate(List<ClientApplication> clientApplications) {
		StringBuilder sb = new StringBuilder();
		sb.append("<p>").append("<table width=\"728\" border=\"1\"  cellspacing=\"0\" cellpadding=\"0\">")
				.append("<tbody>")
				.append("<tr>\r\n" + "<th width=\"199\">\r\n" + "<p><strong>Client</strong></p>\r\n" + "</th>"
						+ "<th width=\"199\">\r\n" + "<p><strong>Position</strong></p>\r\n" + "</th>"
						+ "<th width=\"199\">\r\n" + "<p><strong>Sent On</strong></p>\r\n" + "</th>");
		for (ClientApplication clientApplication : clientApplications) {

			if (clientApplication.getClientPosition().getClient().getName() != null) {
				sb.append("<tr>\r\n" + "<td width=\"529\">\r\n" + "<p>"
						+ clientApplication.getConsultant().getFullname() + "</p>\r\n" + "</td>\r\n");
			}
			if (clientApplication.getClientPosition().getGeneratedCode() != null) {
				sb.append("</td>\r\n" + "<td width=\"529\">\r\n" + "<p>"
						+ clientApplication.getClientPosition().getGeneratedCode() + "</p>\r\n" + "</td>\r\n");
			}
			if (clientApplication.getSentOn() != null) {
				sb.append("<td width=\"529\">\r\n" + "<p>" + clientApplication.getSentOn() + "</p>\r\n" + "</td>\r\n"
						+ "</tr>");
			}
		}
		sb.append("</tbody>").append("</table>");
		getSign(sb);
		String jd = sb.toString();
		return jd;
	}

	public static String getSign(StringBuilder sb) {
		sb.append("<br></br>").append("<p>").append("<table>").append("<tbody>")
				.append("<tr><td><b>Thanks &amp; Regards</b></td></tr>")
				.append("<tr><td><b>Sreenath Thatikonda</b></td></tr>").append("<tr><td>Branch&nbsp;Head</td></tr>")
				.append("<tr><td style=\"font-size: 11.0pt;font-family: 'Calibri',sans-serif;color: #1f497d;\">Talent Corner HR Services Pvt. Ltd.</td></tr>")
				.append("<tr><td style=\"font-size: 11.0pt;font-family: 'Calibri',sans-serif;color: #1f497d;\">(D) 9848071296 &nbsp; (W)&nbsp;<a href=\"http://www.talentcorner.in/\" data-saferedirecturl=\"https://www.google.com/url?q=http://www.talentcorner.in/&amp;source=gmail&amp;ust=1563428769215000&amp;usg=AFQjCNFet2kPL5oLLvDUSpWHxioT4LijGA\">www.talentcorner.in</a>&nbsp;(E)&nbsp;<a href=\"mailto:sreenath.t@talentcorner.in\">sreenath.t@talentcorner.in</a></td></tr>")
				.append("</tbody>\r\n" + "</table>");
		sb.append("<div style=\"font-size: 11.0pt;font-family: 'Calibri',sans-serif;color: #1f497d;\">\r\n"
				+ "	You can also follow us on Facebook &amp; Twitter. Just search for Talent Corner.\r\n" + "</div>")
				.append("<div style=\"font-size: 10.0pt;font-family: 'Calibri',sans-serif;color: #7030a0;\">\r\n"
						+ "<strong>Offices : |Mumbai||Gurgaon||Gujarat||Kota||Pune| |Banglore||Chennai| |Hyderabad||Ahmedabad||Kolkata|</strong></div>")
				.append("<div style=\"font-size: 10.0pt;font-family: 'Calibri',sans-serif;color: #7030a0;\"><strong>Vision 2025</strong>: On&nbsp;<strong>1<sup>st</sup>&nbsp;January 2025</strong>, Talent Corner will be an Organization, having operations in&nbsp;<strong>10</strong>&nbsp;Countries, with&nbsp;<strong>100</strong>&nbsp;Offices &amp; a Team of&nbsp;<strong>1000</strong>&nbsp;People ,Successfully Executing<strong>10000</strong>&nbsp;Recruitment Assignments every Year. We would have recruited&nbsp;<strong>1,00,000</strong>&nbsp;People by then. For every Successful Recruitment we will invest Rs<strong>. 100</strong>&nbsp;towards Girl Child Education, thus by&nbsp;<strong>2025</strong>&nbsp;we would have educated&nbsp;<strong>1000</strong>&nbsp;Girls&rdquo;</div>")
				.append("</p>");
		return sb.toString();
	}

	public EmailContent getInterviewTemplate(Integer id) {
		EmailContent emailContent = new EmailContent();
		StringBuilder body = new StringBuilder();
		StringBuilder sbPara = new StringBuilder();
		Map<String, String> valuesMap = new HashMap<String, String>();
		Optional<ClientApplication> ca = clientApplicationRepository.findById(id);
		valuesMap.put("clientName", ca.get().getClientPosition().getClient().getName());
		valuesMap.put("consultantName", ca.get().getConsultant().getFullname());
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		if (ca.get().getInterviewDate() == null)
			throw new ValidationException("this clientapplication id " + ca.get().getId() + " not shorlisted");
		Date date = ca.get().getInterviewDate();
		String strDate = dateFormat.format(date);
		valuesMap.put("interviewDate", strDate);
		valuesMap.put("interviewTime", ca.get().getInterviewTime());
		valuesMap.put("interviewLocation", ca.get().getInterviewLocation());
		valuesMap.put("address", ca.get().getClientPosition().getClient().getAddress());
		valuesMap.put("clientContactPersonName",
				ca.get().getClientPosition().getClient().getClientContacts().get(0).getFullname());
		valuesMap.put("clientContactPersonNumber",
				ca.get().getClientPosition().getClient().getClientContacts().get(0).getPhone());

		sbPara.append("<p>Hi <strong>${consultantName}</strong>,</p>")
				.append("<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are excited to inform you that your interview has been confirmed with <strong><span style=\"background-color:yellow\">${clientName}</span></strong>.</p>")
				.append("<p><span style=\"background-color:yellow\">Please confirm your availability.</span></p>")
				.append("<p>Please find the interview details below:</p>")
				.append("<p><strong>Interview Date :</strong><span style=\"background-color:yellow\">${interviewDate}</span></p>")
				.append("<p><strong>Interview Time :</strong><span style=\"background-color:yellow\">${interviewTime}</span></p>");

		if (ca.get().getInterviewMode().equalsIgnoreCase("f2f")) {
			sbPara.append(
					"<p><strong>Interview Location :</strong><span style=\"background-color:yellow\">${interviewLocation}</span></p>")
					.append("<p><strong>Address :</strong><span style=\"background-color:yellow\">${address}</span></p>")
					.append("<p><strong>Name of Client Contact Person :</strong><span style=\"background-color:yellow\">${clientContactPersonName} (${clientContactPersonNumber})</span></p>")
					.append("</span></p>").append("<p>**Feel free to call us any time.</p><p></p>")
					.append("<p><span style=\"background-color:yellow\">** Things to Carry:</span></p>")
					.append("<p></p>").append("<p>1.      A physical copy of this interview confirmation email</p>")
					.append("<p></p>").append("<p>2.      Your complete CV</p>").append("<p></p>")
					.append("<p>3.      Education related certificates</p>").append("<p></p>")
					.append("<p>4.      Work Experience letters (if any)</p>").append("<p></p>")
					.append("<p>5.      A Pen and Notebook to make some notes (if needed)</p>").append("<p></p>")
					.append("<p><span style=\"background-color:yellow\">**Interview Guidelines</span></p>")
					.append("<p></p>")
					.append("<p>1.      Please make sure you wear clean and formal clothes for the interview. Your appearance matters a lot.</p>")
					.append("<p></p>")
					.append("<p>2.      Plan your travel well in advance. Please reach the interview location 30 minutes before to avoid last minute delays.</p>")
					.append("<p></p>")
					.append("<p>3.      Do call us once you reach the interview location so that we can inform the client.</p>")
					.append("<p></p>").append("<p>4.      Avoid roaming around the office premises unnecessarily.</p>")
					.append("<p></p>")
					.append("<p>5.      Keep your phone in silent mode. If possible, switch off the mobile when entering the interview room.</p>")
					.append("<p></p>")
					.append("<p>6.      After the interview is completed, please take permission from client before leaving the interview location.</p>")
					.append("<p></p>");
		} else {

			sbPara.append("</span></p>").append("<p>**Feel free to call us any time.</p><p></p>")
					.append("<p><span style=\"background-color:yellow\">** Remember:</span></p>").append("<p></p>")
					.append("<p>1.Find a quite location</p>").append("<p></p>")
					.append("<p>2.Make sure your mobile is fully charged</p>").append("<p></p>")
					.append("<p>3.Speak clearly</p>").append("<p></p>").append("<p>4.Listen carefully</p>")
					.append("<p></p>").append("<p>5.Focus on your language and voice</p>").append("<p></p>");
		}
		sbPara.append("<p>After the interview is completed, inform us on how the interview went.</p>").append("<p></p>")
				.append("<p></p>").append("<p></p>").append("<p></p>").append("<p></p>").append("<p>");
		emailContent.setSubject(
				StrSubstitutor.replace("Congratulations! Your Interview is confirmed with ${clientName}", valuesMap));
		String subject = StrSubstitutor.replace(sbPara.toString(), valuesMap);
		StringBuilder sb = new StringBuilder(subject);

		// body.append(subject);
		emailContent.setBody(sb.toString().concat(JobDescriptionSubstitutor.getSign(body)));
		emailContent.setToEmails(ca.get().getConsultant().getEmail());
		emailContent.setBcc(bcc);
		return emailContent;
	}

	public EmailContent getShortListedCA(List<Integer> ids) throws Exception {
		EmailContent emailContent = null;
		String ccName = null;
		StringBuilder body = new StringBuilder();
		List<String> names = new ArrayList<String>();
		List<ClientApplication> clientApplications = new ArrayList<ClientApplication>();
		for (Integer id : ids) {
			Optional<ClientApplication> ca = clientApplicationRepository.findById(id);
			String name = ca.get().getClientPosition().getClient().getName();
			names.add(name);
			clientApplications.add(ca.get());
		}
		boolean allEqual = names.isEmpty() || names.stream().allMatch(names.get(0)::equals);
		if (allEqual) {
			String data = "";

			StringBuilder sbPara = new StringBuilder();
			int i = 0;
			Map<String, String> valuesMap = new HashMap<String, String>();
			emailContent = new EmailContent();
			sbPara.append(
					"<table width=\"728\" border=\"1\" style=\"border-collapse : collapse\" cellspacing=\"0\" cellpadding=\"0\">")
					.append("<tbody>").append("<tr>\r\n" + "<td colspan=\"2\" width=\"728\" >\r\n")
					.append("<p><strong>Candidate Name</strong></p>\r\n </td>")
					.append("<td colspan=\"2\" width=\"728\" >\r\n").append("<p><strong>Role</strong></p>\r\n </td>")
					.append("<td colspan=\"2\" width=\"728\" >\r\n")
					.append("<p><strong>Interview Date</strong></p>\r\n </td>")
					.append("<td colspan=\"2\" width=\"728\" >\r\n")
					.append("<p><strong>Interview Time</strong></p>\r\n </td>")
					.append("<td colspan=\"2\" width=\"728\" >\r\n")
					.append("<p><strong>Interview Mode</strong></p>\r\n </td>")
					.append("<td colspan=\"2\" width=\"728\" >\r\n")
					.append("<p><strong>Contact Info</strong></p>\r\n </td>").append("\r\n</tr>");
			for (ClientApplication ca : clientApplications) {

				ClientPosition clientPosition = ca.getClientPosition();
				if (clientPosition.getClient().getClientContacts().get(0).getSalutation().equalsIgnoreCase("Mr."))
					ccName = clientPosition.getClient().getClientContacts().get(0).getFullname().concat(" sir");
				else
					ccName = clientPosition.getClient().getClientContacts().get(0).getFullname().concat(" mam");

				valuesMap.put("jobTitle", clientPosition.getRole());
				valuesMap.put("clientContactName", clientPosition.getClient().getClientContacts().get(0).getFullname());
				valuesMap.put("consultantName", ca.getConsultant().getFullname());
				DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				if (ca.getInterviewDate() == null)
					throw new ValidationException("this clientapplication id " + ca.getId() + " not shorlisted");
				Date date = ca.getInterviewDate();
				String strDate = dateFormat.format(date);
				valuesMap.put("interviewDate", strDate);
				valuesMap.put("interviewTime", ca.getInterviewTime());
				valuesMap.put("interviewLocation", ca.getInterviewLocation());
				valuesMap.put("address", ca.getClientPosition().getClient().getAddress());
				valuesMap.put("interviewMode", ca.getInterviewMode());

				i++;
				sbPara.append("<tr>" + "<td colspan=\"2\" width=\"728\" >\r\n")
						.append("<p>${consultantName}</p>\r\n </td>").append("<td colspan=\"2\" width=\"728\" >\r\n")
						.append("<p>${jobTitle}</p>\r\n </td>").append("<td colspan=\"2\" width=\"728\" >\r\n")
						.append("<p>${interviewDate}</p>\r\n </td>").append("<td colspan=\"2\" width=\"728\" >\r\n")
						.append("<p>${interviewTime}</p>\r\n </td>").append("<td colspan=\"2\" width=\"728\" >\r\n")
						.append("<p>${interviewMode}</p>\r\n </td>");
				if (!ca.getInterviewMode().equalsIgnoreCase("VID")) {
					if (ca.getConsultant().getPhone() != null) {
						sbPara.append("<td colspan=\"2\" width=\"728\" >\r\n")
								.append("<p>" + ca.getConsultant().getPhone() + "</p>\r\n </td>").append("</tr>");
					}
				} else {
					if (ca.getOnlineId() != null) {
						sbPara.append("<td colspan=\"2\" width=\"728\" >\r\n")
								.append("<p>" + ca.getOnlineId() + "</p>\r\n </td>").append("</tr>");
					}
				}
				sbPara.append("</tbody>").append("</table>");
				emailContent.setToEmails(ca.getClientPosition().getClient().getClientContacts().get(0).getEmail());
				data = data.concat(StrSubstitutor.replace(sbPara.toString(), valuesMap));
			}
			StringBuilder sb = new StringBuilder();
			sb.append("<p>Hi ").append(ccName).append("</p>")
					.append("Please review & confirm the interview scheduled mentioned below ").append("<p>")
					.append("<p>");
			String temp = sb.toString().concat(data);
			String finalData = temp.concat(new StringBuilder().append("<p>").append("<p>").toString());
			emailContent.setBody(finalData.concat(JobDescriptionSubstitutor.getSign(body)));
			emailContent.setSubject("Upcoming Interview Schedule");
			return emailContent;

		} else {
			throw new ValidationException("select same client application");
		}
	}
}
