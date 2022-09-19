package com.example.first_spring;
import book.Bok;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class book {
    @GetMapping("/book")
    public List<Bok> getbook(){
        List<Bok> list= Arrays.asList(
                new Bok(1, "lokesh", "of 2 states", 2007,"fiction"),
                new Bok(2, "llll", "1122", 2007,"fiction"),
                new Bok(3, "oooo", "33234", 2007, "fiction")
                new Bok(4, "llll", "1122", 2007,"fiction"),
                new Bok(5, "oooo", "33234", 2007, "fiction")
        );
        return list;
    }
}
