package com.ccpt.model;


import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "client_id")
    private Integer id;
    @Column(name = "name")
    private String name;
    
    @Column(name = "address")
    private String address;
    
    @Column(name = "active_flag")
	private char activeFlag;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "updated_date")
	private Date updatedDate;
	
	@Column(name = "billing_address")
    private String billingAddress;
	
	@Column(name = "phone")
    private String phone;
	
	@Column(name = "gst")
    private String gst;
	
	@Column(name = "industry")
    private String industry;
	
	@Column(name = "email")
    private String email;
	
	@Column(name = "servicetax_no")
    private String servicetaxNo;
	
	@Column(name = "service_charge")
    private String serviceCharge;
	
	@Column(name = "guarantee_period")
    private Integer guaranteePeriod;
	
	@Column(name = "credit_period")
    private Integer creditPeriod;
	
   
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "client_id", referencedColumnName = "client_id")
    private List<ClientContact> clientContacts;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<ClientContact> getClientContacts() {
		return clientContacts;
	}

	public void setClientContacts(List<ClientContact> clientContacts) {
		this.clientContacts = clientContacts;
	}

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getGst() {
		return gst;
	}

	public void setGst(String gst) {
		this.gst = gst;
	}

	public String getIndustry() {
		return industry;
	}

	public void setIndustry(String industry) {
		this.industry = industry;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getServicetaxNo() {
		return servicetaxNo;
	}

	public void setServicetaxNo(String servicetaxNo) {
		this.servicetaxNo = servicetaxNo;
	}

	public String getServiceCharge() {
		return serviceCharge;
	}

	public void setServiceCharge(String serviceCharge) {
		this.serviceCharge = serviceCharge;
	}

	public Integer getGuaranteePeriod() {
		return guaranteePeriod;
	}

	public void setGuaranteePeriod(Integer guaranteePeriod) {
		this.guaranteePeriod = guaranteePeriod;
	}

	public Integer getCreditPeriod() {
		return creditPeriod;
	}

	public void setCreditPeriod(Integer creditPeriod) {
		this.creditPeriod = creditPeriod;
	}

    
}
