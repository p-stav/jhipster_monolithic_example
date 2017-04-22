package org.jhipster_monolithic_blog.blog.repository;

import org.jhipster_monolithic_blog.blog.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
