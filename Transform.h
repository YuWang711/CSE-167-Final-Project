#ifndef _TRANSFORM_H
#define _TRANSFORM_H

#ifdef __APPLE__
#include <OpenGL/gl3.h>
#else
#include <GL/glew.h>
#endif

#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <glm/gtx/transform.hpp>
#include <glm/gtx/matrix_interpolation.hpp>
#include <vector>
#include <string>
#include <fstream>
#include <iostream>
#include <sstream>
#include <stdlib.h>
#include <stdio.h>
#include <time.h> 
#include <glm/gtc/type_ptr.hpp>
#include <list>
#include "Node.h"
#include "Geometry.h"

class Transform : public Node
{
private:
	bool render;
	glm::mat4 TransformM;
	std::list<Node*> children;
public:
	Transform(glm::mat4 i);
	~Transform();

	void update(glm::mat4 C);
	void addChild(Node* child);
	void draw(glm::mat4 c, GLuint program);
	void set_render(bool ren);
	bool get_render();
	glm::mat4 getTransform();
};

#endif
