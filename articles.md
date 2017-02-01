---
layout: navpage
title: wiki.template landing page
---

<br>
<div class="large-block-grid-2">
  <li>
    <div class="panel">
{% for page in site.pages %}
       {% if page.title and page.url contains 'wiki/articles/' %}
       <a class="link article_link" href="{{page.url}}">{{ page.title }}</a>
       
        <p>
        <br>
       {% if page.description %}
        <small>
          {{ page.description }}
        </small>
              {% endif %}
      </p>

    {% endif %}
{% endfor %}
</div>
  </li>
  </div>