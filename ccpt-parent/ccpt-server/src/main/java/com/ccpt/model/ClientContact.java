package com.ccpt.model;

import javax.persistence.*;

@Table(name = "client_contact")
@Entity
public class ClientContact {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "contact_id")
    private Integer id;

    @Column(name = "fullname")
	private String fullname;

	@Column(name = "phone")
	private String phone;

	@Column(name = "email")
	private String email;

    @Column(name = "client_id")
    private Integer clientId;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getClientId() {
		return clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}
    
    

   
}