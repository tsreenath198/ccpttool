package com.ccpt.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.repository.SmsTemplateRepository;
import com.ccpt.service.ClientPositionService;
import com.ccpt.util.StrSubstitutor;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.SMS)
public class SMSController {

	@Value("${sms.url}")
	private String url;

	@Value("${sms.auth.key}")
	private String authKey;

	@Value("${sms.sender}")
	private String sender;

	@Value("${sms.route}")
	private String route;

	@Autowired
	private SmsTemplateRepository smsTemplateRepository;

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private RestTemplate restTemplate;

	@PostMapping(CCPTConstants.SEND)
	public ResponseEntity<String> sendSMS(@RequestBody SMS sms) throws URISyntaxException {
		String message = sms.getMessage();
		String contactsCommaSeparated = sms.getContactNumbers();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		String body = "authkey=" + authKey + "&sender=" + sender + "&route=" + route + "&message=" + message
				+ "&mobiles=" + contactsCommaSeparated;
		HttpEntity<String> request = new HttpEntity<String>(body, headers);
		ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
		return new ResponseEntity<String>(response.getBody(), HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.TEMPLATE + "/bulkSMSForClientPosition/{id}")
	public ResponseEntity<SmsTemplate> bulkSMSForClientPosition(@PathVariable Integer id, HttpSession session)
			throws AddressException, MessagingException, IOException {
		ClientPosition clientPosition = clientPositionService.get(id);
		Map<String, String> valuesMap = new HashMap<String, String>();
		valuesMap.put("joblocation", clientPosition.getLocation());
		valuesMap.put("client", clientPosition.getClient().getName());
		valuesMap.put("job", clientPosition.getRole());
		SmsTemplate templateBean = smsTemplateRepository.findByType("send job");
		String templateBody = templateBean.getDescription();
		SmsTemplate st = new SmsTemplate();
		String body = StrSubstitutor.replace(templateBody, valuesMap);
		st.setDescription(body);
		return new ResponseEntity<SmsTemplate>(st, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.TEMPLATE + "/bulkSMSForClientRole/{id}")
	public ResponseEntity<SmsTemplate> bulkSMSForClientRole(@PathVariable Integer id)
			throws AddressException, MessagingException, IOException {
		ClientPosition clientPosition = clientPositionService.get(id);
		Map<String, String> valuesMap = new HashMap<String, String>();
		valuesMap.put("role", clientPosition.getRole());
		SmsTemplate templateBean = smsTemplateRepository.findByType("not reachable");
		String templateBody = templateBean.getDescription();
		SmsTemplate st = new SmsTemplate();
		String body = StrSubstitutor.replace(templateBody, valuesMap);
		st.setDescription(body);
		return new ResponseEntity<SmsTemplate>(st, HttpStatus.OK);
	}

	// @GetMapping(CCPTConstants.TEMPLATE +
	// "/bulkSMSForInterviewConfirmation/{type}/{id}")
	// public ResponseEntity<SmsTemplate>
	// bulkSMSForInterviewConfirmation(@PathVariable Integer id,
	// @PathVariable String type) throws AddressException, MessagingException,
	// IOException {
	// ClientPosition clientPosition = clientPositionService.get(id);
	// List<ClientApplication> clientApplication =
	// clientApplicationService.getClientApplicationByClientPositionId(id);
	// Map<String, String> valuesMap = new HashMap<String, String>();
	// valuesMap.put("role", clientPosition.getRole());
	//
	// Date date = clientApplication.get(0).getInterviewDate();
	// DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
	// String strDate = dateFormat.format(date);
	//
	// valuesMap.put("interviewDate", strDate);
	// valuesMap.put("time", clientApplication.get(0).getInterviewTime());
	// valuesMap.put("interviewLocation",
	// clientApplication.get(0).getInterviewLocation());
	//
	// SmsTemplate templateBean = smsTemplateRepository.findByType(type);
	// String templateBody = templateBean.getDescription();
	// SmsTemplate st = new SmsTemplate();
	// String body = StrSubstitutor.replace(templateBody, valuesMap);
	// st.setDescription(body);
	// return new ResponseEntity<SmsTemplate>(st, HttpStatus.OK);
	// }

}
