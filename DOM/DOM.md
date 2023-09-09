In case of class 
    - Use className
    - eg : document.getElementById('title').className;
    -   The above code will give the "class" attribute of the respective .


document.getElementById('title').getAttribute('class');
    - this gives the "class" of the above attribute functions


document.getElementById('title').setAttribute('class','test');
    - If the earlier class of the above code was heading then after executing the above code 
    - In this case the "class" of the following "title" attributes will be over ride with test;
    - In this case the class is over ride ;

document.getElementById('title').setAttribute('class','test heading');
    - In this case the "class" of the following attributes does not over ride but the class is further added in the list


DIFFERENCE BETWEEN BELOW CODES

-   document.innerContent
-   document.innerHTML
-   document.innerText


<h1 id="title" class="heading">DOM Learning on Chai and Code.
        <span style="display: none;">This is test content</span>
</h1>

==> document.getElementById('title').innerText;
    O/P
    "DOM Learning on Chai and Code."
    
    - This shows only the content which are visible on the screen

==> document.getElementById('title').textContent;
    O/P
    "DOM Learning on Chai and Code.This is test content."

    - This shows all the content inside the particular attributes.

==> document.getElementById('title').innerHTML;
    O/P
    "'DOM Learning on Chai and Code.\n<span style="display: none;">This is test content</span>\n'"

    - In this it shows the HTML tags also along with the content 



### If querySelectorAll is used is gives NodeList 
    - Which can be accessed like array
      ![Image](./dom-querySelectorAll-01.png)
## NodeList and HTMLCollections are not purely Array