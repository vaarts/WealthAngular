package com.funds;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AppController {
	
	@Autowired
	FundsRepository fundsRepository;
	
	@Autowired
	UserRepository userRepository;
	
	
	
	// Get All Funds
	@GetMapping("/funds/all")
	public List<Funds> getFunds() {
		return (List<Funds>) fundsRepository.findAll();
	}
	
	//Get All Users
	@GetMapping("/users/all")
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}
	
	// Sign In
	@PostMapping("/signin")
	public User searchUser(@RequestBody User user) {
		return userRepository.findByUsernameAndPassword(user.getUserName(), user.getUserPassword());
	}
	
	// Add a Fund
	@PostMapping("/funds/add")
	public Funds addFund(@RequestBody Funds fund) {
		return fundsRepository.save(fund);
	}
	
	// Add a User
		@PostMapping("/user/add")
		public User addUser(@RequestBody User user) {
			return userRepository.save(user);
	}

	// Update a Fund	
	@PutMapping("/funds/update")
	public Funds updateFund(@RequestBody Funds fund) {
		Optional<Funds> option = fundsRepository.findById(fund.getFundId());
		return (option.isPresent()) ? fundsRepository.save(fund) : null;
	}
	
	// Delete a Fund
	@DeleteMapping("/funds/delete/{id}")
	public boolean deleteFund(@PathVariable int id) {
		try {
			fundsRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	// Delete a User
		@DeleteMapping("/user/delete/{id}")
		public boolean deleteUser(@PathVariable int id) {
			try {
				userRepository.deleteById(id);
				return true;
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
		}

}
















