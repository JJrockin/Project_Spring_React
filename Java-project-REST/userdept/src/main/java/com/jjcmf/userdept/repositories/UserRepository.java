package com.jjcmf.userdept.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jjcmf.userdept.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
