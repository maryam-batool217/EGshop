
function show() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('toggler1').classList.toggle('top-line1');
    document.getElementById('toggler2').classList.toggle('middle-line1');
    document.getElementById('toggler3').classList.toggle('bottom-line1');
  }
  function showSide() {
    document.getElementById('sidebarLeft').classList.toggle('active');
    document.getElementById('toggle1').classList.toggle('top-line1');
    document.getElementById('toggle2').classList.toggle('middle-line1');
    document.getElementById('toggle3').classList.toggle('bottom-line1');
    document.getElementsById('side-toggleCross').classList.toggle('leftDrawer');

  }

