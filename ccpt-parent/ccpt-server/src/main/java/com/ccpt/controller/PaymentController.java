package com.ccpt.controller;

import java.io.IOException;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.PaymentDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.PaymentMapper;
import com.ccpt.model.Payment;
import com.ccpt.service.BaseService;
import com.ccpt.service.PaymentService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.PAYMENT)
public class PaymentController extends BaseController<PaymentDTO, Payment, Integer> {
	@Autowired
	private PaymentService paymentService;

	@Override
	public BaseService<Payment, Integer> getService() {
		return paymentService;
	}

	@Override
	public BaseMapper<PaymentDTO, Payment, Integer> getMapper() {
		return Mappers.getMapper(PaymentMapper.class);
	}

	/* Download excel with bif format based on paymentId */
	@GetMapping("/downloadExcel")
	public void downloadExcel(@RequestParam Integer paymentId, HttpServletResponse httpServletResponse)
			throws IOException {
		byte[] bytes = paymentService.downloadExcel(paymentId, httpServletResponse);
		String consultantName = paymentService.get(paymentId).getCandidateName();
		try {
			httpServletResponse.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			httpServletResponse.setHeader("Expires", "0");
			httpServletResponse.setHeader("Cache-Control", "must-revalidate, post-check=0, pre-check=0");
			httpServletResponse.setHeader("Pragma", "public");
			httpServletResponse.addHeader("Content-Type",
					"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			httpServletResponse.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			httpServletResponse.setHeader("Content-Disposition",
					"attachment; filename=" + consultantName + "_bif.xlsx");
			ServletOutputStream servletOutputStream = httpServletResponse.getOutputStream();
			servletOutputStream.write(bytes);
			servletOutputStream.flush();
			servletOutputStream.close();
		} catch (Exception exception) {
			System.out.println("exceptions");
		}
	}

	@Override
	protected void validateAndClean(Payment model) {
		if (model.getInvoiceDate() == null)
			throw new ValidationException("Invoice Date cannot be null");
		if (model.getBranchHeadName() == null)
			throw new ValidationException("Branch head name cannot be null");
		if (model.getBranchLocation() == null)
			throw new ValidationException("Branch location cannot be null");
		if (model.getCandidateName() == null)
			throw new ValidationException("Candidate name cannot be null");
		if (model.getPhone() == null)
			throw new ValidationException("Phone number cannot be null");
		if (model.getDesignation() == null)
			throw new ValidationException("Designation cannot be null");
		if (model.getJoiningDate() == null)
			throw new ValidationException("Joining Date cannot be null");
		if (model.getAnnualPackage() == null)
			throw new ValidationException("Annual package cannot be null");
		if (model.getCompanyName() == null)
			throw new ValidationException("Company name cannot be null");
		if (model.getCompanyGstNum() == null)
			throw new ValidationException("Company Gst number cannot be null");
		if (model.getCompanyWebsite() == null)
			throw new ValidationException("Company website cannot be null");
		if (model.getBillingAddress() == null)
			throw new ValidationException("Billing address cannot be null");
		if (model.getContactPerson() == null)
			throw new ValidationException("Contact person cannot be null");
		if (model.getContactPersonNum() == null)
			throw new ValidationException("Contact person number cannot be null");
		if (model.getContactPersonDesignation() == null)
			throw new ValidationException("Contact person designation cannot be null");
		if (model.getContactPersonEmail() == null)
			throw new ValidationException("Contact person email cannot be null");
		if (model.getServiceCharge() == null)
			throw new ValidationException("Service charge cannot be null");
		if (model.getCreditPeriod() == null)
			throw new ValidationException("Credit period cannot be null");
		if (model.getGauranteePeriod() == null)
			throw new ValidationException("Gaurantee period cannot be null");
	}
}