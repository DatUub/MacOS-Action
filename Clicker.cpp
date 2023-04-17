#include <jni.h>
#include <iostream>

#ifdef _WIN32
    #include <Windows.h>
#elif __linux__
    #include <X11/Xlib.h>
#elif __APPLE__
    #include <ApplicationServices/ApplicationServices.h>
#endif

JNIEXPORT void JNICALL Java_Clicker_click(JNIEnv* env, jclass) {
#ifdef _WIN32
    INPUT input = { 0 };
    input.type = INPUT_MOUSE;
    input.mi.dwFlags = MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_LEFTUP | MOUSEEVENTF_VIRTUALDESK;
    SendInput(1, &input, sizeof(input));
#elif __linux__
    Display* display = XOpenDisplay(NULL);
    XTestFakeButtonEvent(display, 1, True, CurrentTime);
    XTestFakeButtonEvent(display, 1, False, CurrentTime);
    XCloseDisplay(display);
#elif __APPLE__
    CGEventRef click = CGEventCreateMouseEvent(NULL, kCGEventLeftMouseDown, CGPointZero, kCGMouseButtonLeft);
    CGEventSetType(click, kCGEventLeftMouseUp);
    CGEventPost(kCGHIDEventTap, click);
    CFRelease(click);
#endif
}
