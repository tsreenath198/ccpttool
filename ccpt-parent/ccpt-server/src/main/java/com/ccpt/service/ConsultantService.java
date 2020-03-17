package com.ccpt.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.ccpt.model.BaseReturn;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.Consultant;
import com.ccpt.model.ConsultantStatistics;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantRepository;

@Service
public class ConsultantService extends BaseService<Consultant, Integer> {
	@PersistenceContext
	EntityManager em;

	@Autowired
	private ConsultantRepository consultantRepository;

	@Autowired
	private ClientApplicationService clientApplicationService;

	public ConsultantService(String entity, EntityManager em) {
		super(entity);
		this.em = em;
	}

	public ConsultantService() {
		super("Consultant");
	}

	@Override
	public BaseRepository<Consultant, Integer> getRepository() {
		return consultantRepository;
	}

	@Override
	protected void postDelete(Consultant consultant) {
		List<ClientApplication> listOfCAs = clientApplicationService
				.findByConsultantIdAndActiveFlag(consultant.getId());
		for (ClientApplication clientApplication : listOfCAs) {
			clientApplication.setActiveFlag(false);
			clientApplication.setUpdatedDate(new Date());
		}

	}

	public List<Consultant> find(String fullname, String email, String phone) {
		return consultantRepository.findByPhoneOrFullnameOrEmail(phone, fullname, email);
	}

	@Override
	protected void postActivate(Consultant consultant) {
		Optional<Consultant> coOptional = consultantRepository.findById(consultant.getId());
		if (coOptional.isPresent()) {
			coOptional.get().setActiveFlag(true);
			coOptional.get().setUpdatedDate(new Date());
		}
	}

	public List<ConsultantStatistics> getAllConsultants() {
		return consultantRepository.getAllConsultants();
	}

	public List<Consultant> search(String searchKey) {
		if (searchKey.contains(","))
			return findConsultantBySkills(searchKey);
		else
			searchKey = "%" + searchKey.replaceAll("%", "").toUpperCase() + "%";
		return consultantRepository.search(searchKey);
	}

	List<Consultant> findConsultantBySkills(String searchKey) {
		final List<Predicate> predicates = new ArrayList<Predicate>();
		List<String> result = Arrays.asList(searchKey.split("\\s*,\\s*"));
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Consultant> cq = cb.createQuery(Consultant.class);
		Root<Consultant> consultant = cq.from(Consultant.class);
		for (String skills : result)
			predicates.add(cb.like(consultant.get("skills"), "% " + skills + " %"));
		cq.where(cb.and(predicates.toArray(new Predicate[] {})));
		TypedQuery<Consultant> query = em.createQuery(cq);
		return query.getResultList();
	}

	public List<Consultant> findConsultant(String skillsCsv, String expYrs, String expMnths, String location) {
		final List<Predicate> skillsPredicates = new ArrayList<Predicate>();
		final List<Predicate> yearsPredicates = new ArrayList<Predicate>();
		final List<Predicate> monthsPredicates = new ArrayList<Predicate>();
		final List<Predicate> locationPredicates = new ArrayList<Predicate>();
		List<String> result = Arrays.asList(skillsCsv.split("\\s*,\\s*"));
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<Consultant> cq = cb.createQuery(Consultant.class);
		Root<Consultant> consultant = cq.from(Consultant.class);

		if (result != null && !result.isEmpty()) {
			for (String skills : result) {
				skillsPredicates.add(cb.like(consultant.get("skills"), "%" + skills + "%"));
			}
		}
		if (expYrs != null && !expYrs.isEmpty())
			yearsPredicates.add(cb.like(consultant.get("experienceYrs"), "%" + expYrs + "%"));
		if (expMnths != null && !expMnths.isEmpty())
			monthsPredicates.add(cb.like(consultant.get("experienceMonths"), "%" + expMnths + "%"));
		if (location != null && !location.isEmpty()) {
			Predicate prefferedLocationPredicate = cb.like(consultant.get("prefferedLocation"), "%" + location + "%");
			Predicate currentLocationPredicate = cb.like(consultant.get("currentLocation"), "%" + location + "%");
			locationPredicates.add(cb.or(prefferedLocationPredicate, currentLocationPredicate));
		}
		cq.where(cb.and(skillsPredicates.toArray(new Predicate[] {})),
				cb.and(yearsPredicates.toArray(new Predicate[] {})),
				cb.and(monthsPredicates.toArray(new Predicate[] {})),
				cb.and(locationPredicates.toArray(new Predicate[] {})));

		TypedQuery<Consultant> query = em.createQuery(cq);
		return query.getResultList();
	}

	public List<Consultant> getInactiveConsultants() {
		return consultantRepository.getInactiveConsultants();
	}

	public Iterable<Consultant> getAll() {
		return consultantRepository.findAll();
	}

	public BaseReturn getAllByStatus(Integer pageNo, Integer pageSize, String sortBy, String status) {
		BaseReturn returnObj = new BaseReturn();
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<Consultant> p = consultantRepository.getAllByStatus(status, paging);
		returnObj.setNoOfRecords(p.getTotalElements());
		returnObj.setList(p.getContent());
		return returnObj;
	}

}
