package com.desafio.agenda.Services;

import com.desafio.agenda.contact.Contact;
import org.springframework.web.client.RestTemplate;

public class EmailService {
    final static String uri = "https://run.mocky.io/v3/c9ec2ca3-a7f5-41d0-8550-b859508f4948";

    public static void senMail(Contact contact) {
        RestTemplate restTemplate = new RestTemplate();
        String reqBody = messageBuilder(contact);
        String result = restTemplate.postForObject(uri, reqBody, String.class);
    }

    private static String messageBuilder(Contact contact) {
        String msg = "";
        msg += "Olá, " + contact.getName() + "!\n";
        msg += contact.getUser().getName() + " te adicionou em sua lista de contatos!";
        return msg;
    }
}
