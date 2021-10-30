package com.revature.dao.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class ErsReim {
	public enum ReimbursementType {
	LODGING, TRAVEL, FOOD, OTHER}
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int reimbursementId;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="authorId")
	private ErsUser author;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="resolverId")
	private ErsUser resolver;
	@Enumerated(EnumType.STRING)
	@Column(length=8)
	private ReimbursementType reimbursementType;
	private double amount;
	private String description;
	private String submitTime;
	private String resolveTime;
	private boolean resolved;
	private boolean accepted;
	
	
	
	public ErsReim(int reimbursementId, ErsUser author, ErsUser resolver, ReimbursementType reimbursementType,
			double amount, String description, String submitTime, String resolveTime, boolean resolved,
			boolean accepted) {
		super();
		this.reimbursementId = reimbursementId;
		this.author = author;
		this.resolver = resolver;
		this.reimbursementType = reimbursementType;
		this.amount = amount;
		this.description = description;
		this.submitTime = submitTime;
		this.resolveTime = resolveTime;
		this.resolved = resolved;
		this.accepted = accepted;
	}

	
	public ErsReim(int reimbursementId, ErsUser author, ErsUser resolver, ReimbursementType reimbursementType,
			double amount, String description, String submitTime, boolean resolved, boolean accepted) {
		super();
		this.reimbursementId = reimbursementId;
		this.author = author;
		this.resolver = resolver;
		this.reimbursementType = reimbursementType;
		this.amount = amount;
		this.description = description;
		this.submitTime = submitTime;
		this.resolved = resolved;
		this.accepted = accepted;
	}


	public ErsReim(int reimbursementId, ErsUser author, ErsUser resolver, ReimbursementType reimbursementType,
			double amount, String description, boolean resolved, boolean accepted) {
		super();
		this.reimbursementId = reimbursementId;
		this.author = author;
		this.resolver = resolver;
		this.reimbursementType = reimbursementType;
		this.amount = amount;
		this.description = description;
		this.resolved = resolved;
		this.accepted = accepted;
	}

	public ErsReim(ErsUser author, ErsUser resolver, ReimbursementType reimbursementType, double amount,
			String description, boolean resolved, boolean accepted) {
		super();
		this.author = author;
		this.resolver = resolver;
		this.reimbursementType = reimbursementType;
		this.amount = amount;
		this.description = description;
		this.resolved = resolved;
		this.accepted = accepted;
	}
	
	

	public ErsReim() {
		super();
	}

	public int getReimbursementId() {
		return reimbursementId;
	}

	public void setReimbursementId(int reimbursementId) {
		this.reimbursementId = reimbursementId;
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

	public ReimbursementType getReimbursementType() {
		return reimbursementType;
	}

	public void setReimbursementType(ReimbursementType reimbursementType) {
		this.reimbursementType = reimbursementType;
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
	

	public String getSubmitTime() {
		return submitTime;
	}


	public void setSubmitTime(String submitTime) {
		this.submitTime = submitTime;
	}


	public String getResolveTime() {
		return resolveTime;
	}


	public void setResolveTime(String resolveTime) {
		this.resolveTime = resolveTime;
	}


	public void setResolved(boolean resolved) {
		this.resolved = resolved;
	}

	public boolean isAccepted() {
		return accepted;
	}

	public void setAccepted(boolean accepted) {
		this.accepted = accepted;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (accepted ? 1231 : 1237);
		long temp;
		temp = Double.doubleToLongBits(amount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + reimbursementId;
		result = prime * result + ((reimbursementType == null) ? 0 : reimbursementType.hashCode());
		result = prime * result + ((resolveTime == null) ? 0 : resolveTime.hashCode());
		result = prime * result + (resolved ? 1231 : 1237);
		result = prime * result + ((resolver == null) ? 0 : resolver.hashCode());
		result = prime * result + ((submitTime == null) ? 0 : submitTime.hashCode());
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
		if (accepted != other.accepted)
			return false;
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
		if (reimbursementId != other.reimbursementId)
			return false;
		if (reimbursementType != other.reimbursementType)
			return false;
		if (resolveTime == null) {
			if (other.resolveTime != null)
				return false;
		} else if (!resolveTime.equals(other.resolveTime))
			return false;
		if (resolved != other.resolved)
			return false;
		if (resolver == null) {
			if (other.resolver != null)
				return false;
		} else if (!resolver.equals(other.resolver))
			return false;
		if (submitTime == null) {
			if (other.submitTime != null)
				return false;
		} else if (!submitTime.equals(other.submitTime))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "ErsReim [reimbursementId=" + reimbursementId + ", author=" + author + ", resolver=" + resolver
				+ ", reimbursementType=" + reimbursementType + ", amount=" + amount + ", description=" + description
				+ ", submitTime=" + submitTime + ", resolveTime=" + resolveTime + ", resolved=" + resolved
				+ ", accepted=" + accepted + "]";
	}

	
	
	
	

	}

	

