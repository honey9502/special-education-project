package hh.special_education_app.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    @GetMapping("/api/hello")
    fun hello(): Map<String, String> {
        return mapOf("message" to "Hello, Special Education App!")
    }
}