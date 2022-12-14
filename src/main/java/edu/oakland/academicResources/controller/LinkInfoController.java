package edu.oakland.academicResources.controller;

import edu.oakland.academicResources.config.LinkInfoJsonConfig;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LinkInfoController {

  private final LinkInfoJsonConfig linkInfoJsonConfig;

  @Autowired
  public LinkInfoController(LinkInfoJsonConfig linkInfoJsonConfig) {
    this.linkInfoJsonConfig = linkInfoJsonConfig;
  }

  @GetMapping("/Linkinfo")
  public String getlinkInfoJson() throws IOException {
    return linkInfoJsonConfig.LinkInfoJsonConfigPostConstruct();
  }
}
