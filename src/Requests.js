import React, {useEffect, useState} from 'react';
import Navbars from "./components/Navbars";
import {GrFormNext} from "react-icons/gr"
import {GrFormPrevious} from "react-icons/gr"
import axios from "axios";

// https://inbarinn.herokuapp.comcourse/getTegs

const Tags = [


    {
        id: "!--...--",
        titl: "This is a comment. Comments are not displayed in the browser"
    },
    {
        id: "!DOCTYPE html",
        titl: "Declaration defines that this document is an HTML5 document"
    },
    {
        id: "a",
        titl: "Tag defines a hyperlink, which is used to link from one page to another"
    },
    {
        id: "abbr",
        titl: "Tag defines an abbreviation or an acronym"
    },
    {
        id: "acronym",
        titl: " Tag was used in HTML 4 to define an acronym."
    },
    {
        id: "address",
        titl: "Tag defines the contact information for the author/owner of a document or an article"
    },
    {
        id: "applet",
        titl: " Tag was used in HTML 4 to define an embedded applet (Plug-in)"
    },
    {
        id: "area",
        titl: " Tag defines an area inside an image map (an image map is an image with clickable areas)"
    },
    {
        id: "article",
        titl: "Tag specifies independent, self-contained content"
    },
    {
        id: "aside",
        titl: "Tag defines some content aside from the content it is placed in"
    },
    {
        id: "audio",
        titl: "Tag is used to embed sound content in a document, such as music or other audio streams"
    },
    {
        id: "b",
        titl: " Tag specifies bold text without any extra importance"
    },
    {
        id: "base",
        titl: " Tag specifies the base URL and/or target for all relative URLs in a document"
    },
    {
        id: "basefont",
        titl: "Tag was used in HTML 4 to specify a default text-color"
    },
    {
        id: "button",
        titl: " Tag defines a clickable button"
    },
    {
        id: "caption",
        titl: " Tag defines a table caption"
    },
    {
        id: "center",
        titl: " Tag was used in HTML5 to center-align text"
    },
    {
        id: "cite",
        titl: " Tag defines the title of a creative work"
    },
    {
        id: "code",
        titl: " Tag is used to define a piece of computer code"
    },
    {
        id: "col",
        titl: " Tag specifies column properties for each column within a <colgroup> element"
    },
    {
        id: "colgroup",
        titl: " Tag specifies a group of one or more columns in a table for formatting"
    },
    {
        id: "data",
        titl: " Tag is used to add a machine-readable translation of a given content"
    },
    {
        id: "datalist",
        titl: " Tag specifies a list of pre-defined options for an <input> element"
    },
    {
        id: "div",
        titl: " Tag defines a division or a section in an HTML document"
    },
    {
        id: "embed",
        titl: " Tag defines a container for an external resource, such as a web page"
    },
    {
        id: "fieldset",
        titl: " Tag is used to group related elements in a form"
    },
    {
        id: "figcaption",
        titl: " Tag defines a caption for a <figure> element"
    },
    {
        id: "figure",
        titl: " Tag specifies self-contained content, like illustrations, diagrams, photos"
    },
    {
        id: "font",
        titl: " Tag was used in HTML 4 to specify the font face, font size, and color of text"
    },
    {
        id: "footer",
        titl: " Tag defines a footer for a document or section"
    },
    {
        id: "form",
        titl: " Tag is used to create an HTML form for user input"
    },
    {
        id: "frame",
        titl: " Tag was used in HTML 4 to define one particular window (frame) within a <frameset>"
    },
    {
        id: "frameset",
        titl: " Tag was used in HTML 4 to define a frameset"
    },
    {
        id: "head",
        titl: "Element contains meta information about the HTML page"
    },
    {
        id: "header",
        titl: "Element represents a container for introductory content or a set of navigational links"
    },
    {
        id: "hr",
        titl: "Tag to define thematic changes in the content"
    },
    {
        id: "html",
        titl: "Tag represents the root of an HTML document"
    },
    {
        id: "i",
        titl: "Tag defines a part of text in an alternate voice or mood"
    },
    {
        id: "iframe",
        titl: "Tag specifies an inline framed"
    },
    {
        id: "img",
        titl: "Tag is used to embed an image in an HTML page"
    },
    {
        id: "input",
        titl: "Tag specifies an input field where the user can enter data"
    },
    {
        id: "ins",
        titl: "Tag defines a text that has been inserted into a document"
    },
    {
        id: "label",
        titl: "Tag defines a label for several elements"
    },
    {
        id: "legend",
        titl: "Tag defines a caption for the <fieldset> elemen"
    },
    {
        id: "li",
        titl: "Tag defines a list item"
    },
    {
        id: "link",
        titl: "Tag defines the relationship between the current document and an external resource"
    },
    {
        id: "main",
        titl: "Tag specifies the main content of a document"
    },
    {
        id: "map",
        titl: "Tag is used to define an image map"
    },
    {
        id: "mark",
        titl: "Tag defines text that should be marked or highlighted"
    },
    {
        id: "meta",
        titl: "Tag  defines metadata about an HTML document"
    },
    {
        id: "meter",
        titl: "Tag defines a scalar measurement within a known range"
    },
    {
        id: "nav",
        titl: "Tag defines a set of navigation links"
    },
    {
        id: "object",
        titl: "Tag defines a container for an external resource"
    },
    {
        id: "ol",
        titl: "Tag defines an ordered list"
    },
    {
        id: "optgroup",
        titl: "  Tag is used to group related options in a <select> element (drop-down list)"
    },
    {
        id: "option",
        titl: "Tag defines an option in a select list"
    },
    {
        id: "output",
        titl: "Tag is used to represent the result of a calculation"
    },
    {
        id: "param",
        titl: "Tag  is used to define parameters for an <object> element"
    },
    {
        id: "picture",
        titl: "Tag  gives web developers more flexibility in specifying image resources"
    },
    {
        id: "progress",
        titl: "Tag  in conjunction with JavaScript to display the progress of a task"
    },
    {
        id: "ruby",
        titl: "Tag  specifies a ruby annotation"
    },
    {
        id: "title",
        titl: "Element specifies a title for the HTML page"
    },
    {
        id: "body",
        titl: "Element defines the document's body, and is a container for all the visible contents"
    },
    {
        id: "h1--h6",
        titl: "Element defines a large heading"
    },
    {
        id: "p",
        titl: " Element defines a paragraph"
    },
    {
        id: "script",
        titl: " Tag is used to embed a client-side script (JavaScript)"
    },
    {
        id: "section",
        titl: " Tag defines a section in a document"
    },
    {
        id: "select",
        titl: "Element is used to create a drop-down list"
    },
    {
        id: "small",
        titl: "Tag defines smaller text (like copyright and other side-comments)"
    },
    {
        id: "source",
        titl: "Tag is used to specify multiple media resources for media elements"
    },
    {
        id: "strike",
        titl: "Tag was used in HTML 4 to define strikethrough text"
    },
    {
        id: "strong",
        titl: "Tag is used to define text with strong importance"
    },
    {
        id: "style",
        titl: "Tag is used to define style information (CSS) for a document"
    },
    {
        id: "sub",
        titl: "Tag defines subscript text"
    },
    {
        id: "summary",
        titl: "Tag defines a visible heading for the <details> element"
    },
    {
        id: "sup",
        titl: "Tag defines superscript text"
    },
    {
        id: "svg",
        titl: "Tag defines a container for SVG graphics"
    },
    {
        id: "table",
        titl: "Tag defines an HTML table"
    },
    {
        id: "tbody",
        titl: "Tag is used to group the body content in an HTML table"
    },
    {
        id: "td",
        titl: "Tag defines a standard data cell in an HTML table"
    },
    {
        id: "template",
        titl: "Tag is used as a container to hold some HTML content hidden from the user"
    },
    {
        id: "textarea",
        titl: "Tag defines a multi-line text input control"
    },
    {
        id: "tfoot",
        titl: "Tag  is used to group footer content in an HTML table"
    },
    {
        id: "th",
        titl: "Tag is used to group footer content in an HTML table"
    },
    {
        id: "thead",
        titl: "Tag  is used to group header content in an HTML table"
    },
    {
        id: "time",
        titl: "Tag is used to group header content in an HTML table"
    },
    {
        id: "tr",
        titl: "Tag defines a row in an HTML table"
    },
    {
        id: "ul",
        titl: "Tag  defines an unordered (bulleted) list"
    },
    {
        id: "video",
        titl: "Tag is used to embed video content in a document"
    },{
        id: "wbr",
        titl: " (Word Break Opportunity) tag specifies where"
    },

]


const Requests = () => {
    const [useTags, setUseTags] =useState([]);
    useEffect(() => {
        axios.get('https://inbarinn.herokuapp.comcourse/getTegs',{
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        }).then((response)=>{
            console.log(response)
            // setUseTags(response.data.data)
        }).catch((error)=>{
            console.error("error !")
        })
    }, []);
    return (
        <div className="container">
            <Navbars/>
            <div className="row">
                <div className="tages">
                    <div className="jois">
                        <li>
                            Tag Description
                        </li>
                    </div>
                    {Tags.map((item, index) => (
                        <div key={index} className="d-flex fas ">

                            <div className="tenst">

                                <div className="fas">
                                    <li>
                                        <GrFormPrevious className="GrFormPrevious"/>
                                        {item.id}
                                        <GrFormNext/>
                                    </li>
                                </div>


                            </div>

                            <div className="tenset">
                                <div className="fase">
                                    <li className="defi">{item.titl}</li>
                                </div>
                            </div>


                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default Requests;
