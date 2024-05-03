# Reveal.js presentation written in emacs org-mode + org-reveal


<a id="org027a6c8"></a>

## Description

[Reveal.js](https://revealjs.com/) is a tool for creating HTML presentations and [org-reveal](https://github.com/yjwen/org-reveal/) is an emacs package that converts org files into reveal.js-compatible HTML format. Although org-reveal greatly simplifies the process of creating a presentation, some modifications are necessary. The code shows such modifications using as example part of the presentation used for my PhD. thesis dissertation.


<a id="org53f8296"></a>

## Updates


<a id="orgccff9f2"></a>

### 2024-05-03

-   The url for the cdn was changed to <https://cdn.jsdelivr.net/npm/reveal.js@5.1.0> which corresponds to the latest version of reveal.js.
    -   The above url was used in the following lines
        -   `#+REVEAL_ROOT:`
        -   `#+REVEAL_INIT_OPTIONS:`, more specifically, `themesPath:'https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/theme/'`
    -   The last line is necessary to change the themes using the menu plugin
-   When producing the html file using the cdn above I found that it:
    -   Includes the script tag which points to the file `pdf.css` which does not exist, `pdf.scss` is present instead
        
        ```html
        <!-- If the query includes 'print-pdf', include the PDF print sheet -->
        <script>
            if( window.location.search.match( /print-pdf/gi ) ) {
                var link = document.createElement( 'link' );
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/css/print/pdf.css';
                document.getElementsByTagName( 'head' )[0].appendChild( link );
            }
        </script>
        ```
    -   Misses some script tags for some plugins
    -   Includes an array, `dependencies` that is not necessary.

The result is that the presentation can not be rendered in the browser.

After trying different things, I found that when the line `#+REVEAL_ROOT:` is commented and the `html` is produced the above issues are corrected. Removing the comment and exporting again would produce a file that uses the cdn and is rendered correctly. Apparently, the above needs to be done only once.


<a id="org5149586"></a>

# Links

-   [Live version](https://ssl-bio.github.io/Reveal.js-demo/#/slide-org4ffdd88).
-   [Description (Original)](https://ssl-blog.netlify.app/posts/reveal-js-presentations/)
-   [Description (Modifications)](https://ssl-blog.netlify.app/posts/reveal-js-demo2/)
