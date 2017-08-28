'use strict';
///////////////////////
// Utilities
///////////////////////

var pvd = function pvd(e) {
  return e.preventDefault();
};
var hide = function hide(item) {
  item.style.display = 'none';
};
var show = function show(item) {
  item.style.display = 'block';
};
var $$ = function $$(item) {
  return document.querySelectorAll(item);
};
var sanitizeHash = function sanitizeHash(text) {
  return text.toLowerCase().split(' ').join('-');
};

//////////////////////
// DOM HOOKS
///////////////////////
var mainDOM = $$('main')[0];

var headerDOM = $$('header')[0];

var navDOM = $$('header nav')[0];

var navListDOM = $$('header .nav-list')[0];

var userAreaDOM = $$('.user-area')[0];

var sideBarsDOM = $$('.sidebar');

var libDocDOM = $$('.lib-doc')[0];

var guideAreaDOM = $$('.guide section');

var docAreaDOM = $$('.lib section');

var rcIframeInjectDOM = $$('#rcIframeInject')[0];

var acIframeInjectDOM = $$('#acIframeInject')[0];

var stIframeInjectDOM = $$('#stIframeInject')[0];

var contentShortcutsDOM = $$('.content-shortcuts')[0];

var guideContentDOM = $$('.guides .content')[0];

var guideiFrameDOM = $$('.guides iframe');

var appmanagerInjectDOM = $$('#appmanagerinject')[0];

var sidecarScriptInjectDOM = $$('#sidecarScriptInject')[0];

var loadingWrapperParentDOM = $$('.loading-wrapper-parent');

///////////////////////
// iFrame Lazy Loader
///////////////////////

// Mobile Checker
if (window.document.body.clientWidth > '794') {
  guideContentDOM.onscroll = function () {
    return iframeLazyLoad();
  };
} else {
  loadingWrapperParentDOM.forEach(function (item) {
    var warningText = 'Interactive code playground not available in mobile';
    var warningDom = document.createElement('p');
    var warningDomChild = document.createElement('b');
    warningDomChild.textContent = warningText;
    warningDom.appendChild(warningDomChild);
    item.parentNode.appendChild(warningDom);
    item.remove();
  });
}

function iframeLazyLoad() {
  var guidestop = guideContentDOM.scrollTop;
  var viewArea = document.body.offsetHeight;
  var bottomBar = guidestop + viewArea;

  guideiFrameDOM.forEach(function (item) {
    var iframetop = item.parentElement.offsetTop;
    var itop = item.id + ":" + iframetop;

    if (!item.getAttribute('loaded') && bottomBar >= iframetop) {

      var setIframe = function setIframe(url) {
        item.setAttribute('src', 'https://www.webpackbin.com/bins/' + url);
        item.setAttribute('loaded', true);
      };

      switch (item.id) {
        case 'rcIframeInject':
          setIframe('-Kql3OAxjMEtK4Vn2M3o');
          break;
        case 'acIframeInject':
          setIframe('-Kql5WgV-D0sZrabxJ2_');
          break;
        case 'stIframeInject':
          setIframe('-Kqcukv7y_qg-05zwEci');
          break;
      }
    }
  });
}

///////////////////////
// Sidebar Creator
///////////////////////

function createSidebarList(contextArea, flag) {

  var list = document.createElement('ul');

  if (flag === 'guide') {
    var contextAreaH2s = contextArea.querySelectorAll('h2');

    contextAreaH2s.forEach(function (el) {
      var url = sanitizeHash(el.innerHTML);
      var listItem = document.createElement('li');
      var link = document.createElement('a');

      el.id = url;
      link.innerHTML = el.innerHTML;
      link.href = '#' + url;
      link.onclick = function (evt) {
        changeSideBarLinkClass(evt.target);
      };

      listItem.appendChild(link);
      list.appendChild(listItem);
    });
  }

  if (flag === 'doc') {
    var docTOCpath = 'ul:nth-of-type(1) li ul li';
    var ucContentListItems = contextArea.querySelectorAll(docTOCpath);
    var cloneArry = [];

    ucContentListItems.forEach(function (item) {
      var newClone = item.cloneNode(true);
      newClone.childNodes[0].onclick = function (evt) {
        changeSideBarLinkClass(evt.target);
      };
      cloneArry.push(newClone);
    });

    if (cloneArry.length > 0) {
      cloneArry.forEach(function (item) {
        if (item.childNodes[1] !== undefined) {
          item.childNodes[1].remove();
        }
        list.appendChild(item);
      });
    }
  }

  return list;
}

function createSidebarAreas(currentSource, sourceFlag) {
  var contextArea = currentSource;

  var createdSection = document.createElement('section');

  var contextAreaH1 = contextArea.querySelector('h1');
  contextAreaH1.id = contextAreaH1.textContent.toLowerCase().split(' ').join('-');

  var contextAreaH1Clone = contextAreaH1.cloneNode(true);
  contextAreaH1Clone.id = '';

  var h1Link = document.createElement('a');
  h1Link.href = "#" + contextAreaH1.textContent.toLowerCase().split(' ').join('-');
  h1Link.appendChild(contextAreaH1Clone);

  return {
    section: createdSection,
    header: h1Link,
    list: createSidebarList(contextArea, sourceFlag)
  };
}

function createSidebars(sources) {

  sources.forEach(function (source) {
    var flag = void 0;
    source[0].parentNode.className === 'guide' ? flag = 'guide' : flag = 'doc';

    for (var i = 0; i < source.length; i++) {
      var createdElements = createSidebarAreas(source[i], flag);

      createdElements.section.appendChild(createdElements.header);
      createdElements.section.appendChild(createdElements.list);

      flag === 'guide' ? sideBarsDOM[0].appendChild(createdElements.section) : sideBarsDOM[1].appendChild(createdElements.section);
    }
  });
}

createSidebars([guideAreaDOM, docAreaDOM]);

///////////////////////
// Router Logic
///////////////////////

function changeMainClass(desiredHashText) {
  mainDOM.classList.forEach(function (mainClass) {
    mainClass !== 'main' ? mainDOM.classList.remove(mainClass) : null;
  });
  mainDOM.classList.add(desiredHashText);
}

function changeNavClass(desiredParent) {
  navListDOM.childNodes.forEach(function (navItem) {
    if (navItem.classList.length >= 2) {
      navItem.classList.remove('active');
    }
  });
  desiredParent.classList.add('active');
}

function changeSideBarLinkClass(sidebarLink) {
  sidebarLink.closest('.sidebar').querySelectorAll('li a').forEach(function (aLink) {
    aLink.parentElement.classList.remove('active');
  });

  sidebarLink.parentElement.classList.add('active');
}

///////////////////////
// Nav Event Handlers
///////////////////////

contentShortcutsDOM.onclick = function (evt) {
  var tabArea = evt.target.parentElement.parentElement.parentElement.parentElement.classList[0].split('-').join('');

  changeMainClass(tabArea);
};

headerDOM.onclick = function (evt) {
  var desiredElement = evt.target;
  var desiredParent = evt.target.parentElement;

  // Outbound link check
  if (desiredParent.hash) {

    // Hash isolation
    var desiredGrandParent = desiredParent.parentElement;
    var desiredHash = desiredParent.hash;
    var desiredHashText = desiredHash.replace('#', '');

    // True links
    if (desiredHash !== undefined && desiredHash !== '') {
      changeNavClass(desiredGrandParent);
      changeMainClass(desiredHashText);
    }

    // Exception for external links
    if (desiredHash !== '') {
      pvd(evt);
    }

    // Gitter Inject
    if (desiredHashText === 'gitter' && sidecarScriptInjectDOM === undefined) {
      var _sidecarScriptInjectDOM = document.createElement('script');
      _sidecarScriptInjectDOM.id = "sidecarScriptInject";
      _sidecarScriptInjectDOM.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
      document.body.appendChild(_sidecarScriptInjectDOM);
    }

    // App Manager Inject
    if (desiredHashText === 'myapps' && appmanagerInjectDOM.childNodes.length === 0) {
      appmanagerInjectDOM.src = "https://appmanager.uport.space/";
    }
  }
};

// TODO: Get JSDOC based stuff in there

///////////////////////
// HAX
///////////////////////

// Hide dupe of ConnectCore
var uch2cc = '#uport-connect .lib-doc > h2:nth-of-type(3)';
var uch2ccDOM = $$(uch2cc)[0];
var uch2ccDOMPlusAll = $$(uch2cc + ' ~ *');
hide(uch2ccDOM);
uch2ccDOMPlusAll.forEach(function (el) {
  hide(el);
});

// Execute Nav if URL is full
if (!!window.location.hash) {
  var sidebarLink = $$('*[href="' + window.location.hash + '"]')[0];
  var relevantPage = sidebarLink.closest('.pagewrap').parentElement.classList[0];
  var relventPageTrigger = $$('*[href="' + '#' + relevantPage + '"] span')[0];

  setTimeout(function () {
    relventPageTrigger.click();
  }, 1);
  setTimeout(function () {
    sidebarLink.click();changeSideBarLinkClass(sidebarLink);
  }, 2);
}