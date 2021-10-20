package com.revature.dao.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ErsReim {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int reimbursement_id;
	private int type_id;
	@ManyToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinColumn(name="author_id")
	private ErsUser author;
	@ManyToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinColumn(name="resolver_id")
	private ErsUser resolver;
	private double amount;
	private String description;
	private boolean resolved;
	
	public ErsReim(int reimbursement_id, int type_id, ErsUser author, ErsUser resolver, double amount,
			String description, boolean resolved) {
		super();
		this.reimbursement_id = reimbursement_id;
		this.type_id = type_id;
		this.author = author;
		this.resolver = resolver;
		this.amount = amount;
		this.description = description;
		this.resolved = resolved;
	}
	public ErsReim(int type_id, ErsUser author, ErsUser resolver, double amount, String description, boolean resolved) {
		super();
		this.type_id = type_id;
		this.author = author;
		this.resolver = resolver;
		this.amount = amount;
		this.description = description;
		this.resolved = resolved;
	}
	public ErsReim() {
		super();
	}
	public int getReimbursement_id() {
		return reimbursement_id;
	}
	public void setReimbursement_id(int reimbursement_id) {
		this.reimbursement_id = reimbursement_id;
	}
	public int getType_id() {
		return type_id;
	}
	public void setType_id(int type_id) {
		this.type_id = type_id;
	}
	public ErsUser getAuthor() {
		return author;
	}
	public void setAuthor(ErsUser author) {
		this.author = author;
	}
	public ErsUser getResolver() {
		return resolver;
	}
	public void setResolver(ErsUser resolver) {
		this.resolver = resolver;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isResolved() {
		return resolved;
	}
	public void setResolved(boolean resolved) {
		this.resolved = resolved;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(amount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + reimbursement_id;
		result = prime * result + (resolved ? 1231 : 1237);
		result = prime * result + ((resolver == null) ? 0 : resolver.hashCode());
		result = prime * result + type_id;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ErsReim other = (ErsReim) obj;
		if (Double.doubleToLongBits(amount) != Double.doubleToLongBits(other.amount))
			return false;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (reimbursement_id != other.reimbursement_id)
			return false;
		if (resolved != other.resolved)
			return false;
		if (resolver == null) {
			if (other.resolver != null)
				return false;
		} else if (!resolver.equals(other.resolver))
			return false;
		if (type_id != other.type_id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "ErsReim [reimbursement_id=" + reimbursement_id + ", type_id=" + type_id + ", author=" + author
				+ ", resolver=" + resolver + ", amount=" + amount + ", description=" + description + ", resolved="
				+ resolved + "]";
	}
	
	

	}

	
