package edu.oakland.academicResources.config;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LinkInfoJsonConfig {
  @Value("${oakland.link-info-json.path}")
  public String linkInfoJsonPath;

  public String linkInfoJson;

  @PostConstruct
  public String LinkInfoJsonConfigPostConstruct() throws IOException {
    linkInfoJson = readLinkInfoJson(linkInfoJsonPath);
    return linkInfoJson;
  }

  private String readLinkInfoJson(String filePath) throws IOException {
    return Files.readString(Paths.get(filePath));
  }
}
