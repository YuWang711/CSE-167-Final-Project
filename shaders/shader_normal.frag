#version 330 core

struct Material {
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    float shininess;
};

out vec4 FragColor;

in vec3 Normal;  
in vec3 FragPos;
in vec3 objectColor;
  
uniform vec3 lightPos; 
uniform vec3 viewPos; 
uniform vec3 lightColor;

uniform float attenuation;
uniform float attenuationStrength;

uniform Material material;

void main()
{     
    /*
        Default ambience with no lighting physics
    */

    // ambient
    vec3 ambient = lightColor * normalize(material.ambient);
  	
    // diffuse 
    vec3 norm = (normalize(Normal) + 1) / 2;
    // vec3 lightDir = normalize(lightPos - FragPos);
    // float diff = max(dot(norm, lightDir), 0.0);
    // vec3 diffuse = lightColor * (diff * normalize(material.diffuse));
    
    // // specular
    // vec3 viewDir = normalize(viewPos - FragPos);
    // vec3 reflectDir = reflect(-lightDir, norm);  
    // float spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);
    // vec3 specular = lightColor * (spec * normalize(material.specular));

    // // attenuation (linear)
    // float attenuation = 1.0f / (attenuationStrength * length(lightPos - FragPos));
        
    // vec3 result = (ambient + diffuse + specular) * attenuation * objectColor;
    // FragColor = vec4(result, 1.0);
    vec3 result = norm;
    FragColor = vec4(result, 1.0);
}