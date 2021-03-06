
package com.ccpt.controller;

import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.EmailContent;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.EmailContentService;
import com.ccpt.service.EmailService;

@Controller
@CrossOrigin
public class EmailController {

	@Autowired
	private EmailContentService emailContentService;

	@Autowired
	private EmailService emailService;

	@Autowired
	private ClientApplicationService clientApplicationService;

	/* Sends an email */
	@PostMapping(CCPTConstants.SEND_EMAIL)
	public ResponseEntity<String> sendEmail(@RequestBody EmailContent emailContent) throws Exception {
		try {
			String uuid = UUID.randomUUID().toString();
			emailContent.setUuid(uuid);
			String body = "<body style=\"font-family:Calibri;\"><span style=\"background-color:yellow\"><b>Email Ref#:</b>"
					.concat(uuid).concat("</span>").concat("<br>").concat(emailContent.getBody()).concat("</body>");
			emailService.sendEmailWithAttachments(emailContent.getToEmails(), emailContent.getSubject(), body,
					emailContent.getCc(), emailContent.getBcc(), emailContent.getUploadFiles());
			emailContentService.save(emailContent);
			Map<String, Integer[]> info = emailContent.getUrlInfo();
			if (info != null) {
				Integer[] caIds = info.get("getClientApps");
				for (Integer id : caIds) {
					clientApplicationService.updateStatus(id, "Sent to Client");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Sending Email is Failed");
		}
		return new ResponseEntity<String>(HttpStatus.OK);
	}
}