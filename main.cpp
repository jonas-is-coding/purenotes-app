#define GL_SILENCE_DEPRECATION

#include <GLFW/glfw3.h>
#include <iostream>

int main() {
    // GLFW initialisieren
    if (!glfwInit()) {
        std::cerr << "Fehler: GLFW konnte nicht initialisiert werden!" << std::endl;
        return -1;
    }

    // Fenster erstellen
    GLFWwindow* window = glfwCreateWindow(800, 600, "Mein C++ Fenster", nullptr, nullptr);
    if (!window) {
        std::cerr << "Fehler: Fenster konnte nicht erstellt werden!" << std::endl;
        glfwTerminate();
        return -1;
    }

    // Fenster-Kontext setzen
    glfwMakeContextCurrent(window);

    // Haupt-Schleife
    while (!glfwWindowShouldClose(window)) {
        // Hintergrundfarbe
        glClear(GL_COLOR_BUFFER_BIT);

        // Inhalte des Fensters zeichnen (falls nötig)

        // Puffer tauschen
        glfwSwapBuffers(window);

        // Eingabe-Events verarbeiten
        glfwPollEvents();
    }

    // Ressourcen freigeben
    glfwDestroyWindow(window);
    glfwTerminate();
    return 0;
}