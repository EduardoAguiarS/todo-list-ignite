*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${URL}            http://localhost:3000/
${BROWSER}        Chrome
${TODO_INPUT}     task-input
${ADD_TASK}       add-task

*** Test Cases ***
Adding Task
    Open Browser To Todo List Page
    Click in Input Text
    Click in Add Button
    Close Browser
    
*** Keywords ***
Open Browser To Todo List Page
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Title Should Be    Todo List
    sleep    0.5s
Click in Input Text
    Input Text    id:${TODO_INPUT}   Reunião as 15:00
    sleep    0.5s
Click in Add Button
    Click Button    id:${ADD_TASK}
    sleep    1s

