var notepad;

function createNote()
{
    notepad = document.createElement("div");

    var notepadContent = document.createElement("input");
    notepadContent.classList.add("note-disp");
    notepad.classList.add("note-class");

    notepad.append(notepadContent);
    document.body.insertBefore(notepad, null);
}