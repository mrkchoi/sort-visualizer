'use strict';
// const { PerformanceObserver, performance } = require("perf_hooks");
// let fs = require('fs');
import regeneratorRuntime from "regenerator-runtime";


var color_maps = {
  hsl: function(x) {
    return "hsl(" + (x * 360) + ", 100%, 50%)";
  },
  grayscale: function(x) {
    var y = x * 255;
    return 'rgb(' + [y, y, y].join() + ')';
  },
  inferno: function(x) {
    var data = ['#000004', '#010005', '#010106', '#010108', '#02010a', '#02020c', '#02020e', '#030210', '#040312', '#040314', '#050417', '#060419', '#07051b', '#08051d', '#09061f', '#0a0722', '#0b0724', '#0c0826', '#0d0829', '#0e092b', '#10092d', '#110a30', '#120a32', '#140b34', '#150b37', '#160b39', '#180c3c', '#190c3e', '#1b0c41', '#1c0c43', '#1e0c45', '#1f0c48', '#210c4a', '#230c4c', '#240c4f', '#260c51', '#280b53', '#290b55', '#2b0b57', '#2d0b59', '#2f0a5b', '#310a5c', '#320a5e', '#340a5f', '#360961', '#380962', '#390963', '#3b0964', '#3d0965', '#3e0966', '#400a67', '#420a68', '#440a68', '#450a69', '#470b6a', '#490b6a', '#4a0c6b', '#4c0c6b', '#4d0d6c', '#4f0d6c', '#510e6c', '#520e6d', '#540f6d', '#550f6d', '#57106e', '#59106e', '#5a116e', '#5c126e', '#5d126e', '#5f136e', '#61136e', '#62146e', '#64156e', '#65156e', '#67166e', '#69166e', '#6a176e', '#6c186e', '#6d186e', '#6f196e', '#71196e', '#721a6e', '#741a6e', '#751b6e', '#771c6d', '#781c6d', '#7a1d6d', '#7c1d6d', '#7d1e6d', '#7f1e6c', '#801f6c', '#82206c', '#84206b', '#85216b', '#87216b', '#88226a', '#8a226a', '#8c2369', '#8d2369', '#8f2469', '#902568', '#922568', '#932667', '#952667', '#972766', '#982766', '#9a2865', '#9b2964', '#9d2964', '#9f2a63', '#a02a63', '#a22b62', '#a32c61', '#a52c60', '#a62d60', '#a82e5f', '#a92e5e', '#ab2f5e', '#ad305d', '#ae305c', '#b0315b', '#b1325a', '#b3325a', '#b43359', '#b63458', '#b73557', '#b93556', '#ba3655', '#bc3754', '#bd3853', '#bf3952', '#c03a51', '#c13a50', '#c33b4f', '#c43c4e', '#c63d4d', '#c73e4c', '#c83f4b', '#ca404a', '#cb4149', '#cc4248', '#ce4347', '#cf4446', '#d04545', '#d24644', '#d34743', '#d44842', '#d54a41', '#d74b3f', '#d84c3e', '#d94d3d', '#da4e3c', '#db503b', '#dd513a', '#de5238', '#df5337', '#e05536', '#e15635', '#e25734', '#e35933', '#e45a31', '#e55c30', '#e65d2f', '#e75e2e', '#e8602d', '#e9612b', '#ea632a', '#eb6429', '#eb6628', '#ec6726', '#ed6925', '#ee6a24', '#ef6c23', '#ef6e21', '#f06f20', '#f1711f', '#f1731d', '#f2741c', '#f3761b', '#f37819', '#f47918', '#f57b17', '#f57d15', '#f67e14', '#f68013', '#f78212', '#f78410', '#f8850f', '#f8870e', '#f8890c', '#f98b0b', '#f98c0a', '#f98e09', '#fa9008', '#fa9207', '#fa9407', '#fb9606', '#fb9706', '#fb9906', '#fb9b06', '#fb9d07', '#fc9f07', '#fca108', '#fca309', '#fca50a', '#fca60c', '#fca80d', '#fcaa0f', '#fcac11', '#fcae12', '#fcb014', '#fcb216', '#fcb418', '#fbb61a', '#fbb81d', '#fbba1f', '#fbbc21', '#fbbe23', '#fac026', '#fac228', '#fac42a', '#fac62d', '#f9c72f', '#f9c932', '#f9cb35', '#f8cd37', '#f8cf3a', '#f7d13d', '#f7d340', '#f6d543', '#f6d746', '#f5d949', '#f5db4c', '#f4dd4f', '#f4df53', '#f4e156', '#f3e35a', '#f3e55d', '#f2e661', '#f2e865', '#f2ea69', '#f1ec6d', '#f1ed71', '#f1ef75', '#f1f179', '#f2f27d', '#f2f482', '#f3f586', '#f3f68a', '#f4f88e', '#f5f992', '#f6fa96', '#f8fb9a', '#f9fc9d', '#fafda1', '#fcffa4'];
    return data[Math.floor(x * 255)];
  },
  magma: function(x) {
    var data = ['#000004', '#010005', '#010106', '#010108', '#020109', '#02020b', '#02020d', '#03030f', '#030312', '#040414', '#050416', '#060518', '#06051a', '#07061c', '#08071e', '#090720', '#0a0822', '#0b0924', '#0c0926', '#0d0a29', '#0e0b2b', '#100b2d', '#110c2f', '#120d31', '#130d34', '#140e36', '#150e38', '#160f3b', '#180f3d', '#19103f', '#1a1042', '#1c1044', '#1d1147', '#1e1149', '#20114b', '#21114e', '#221150', '#241253', '#251255', '#271258', '#29115a', '#2a115c', '#2c115f', '#2d1161', '#2f1163', '#311165', '#331067', '#341069', '#36106b', '#38106c', '#390f6e', '#3b0f70', '#3d0f71', '#3f0f72', '#400f74', '#420f75', '#440f76', '#451077', '#471078', '#491078', '#4a1079', '#4c117a', '#4e117b', '#4f127b', '#51127c', '#52137c', '#54137d', '#56147d', '#57157e', '#59157e', '#5a167e', '#5c167f', '#5d177f', '#5f187f', '#601880', '#621980', '#641a80', '#651a80', '#671b80', '#681c81', '#6a1c81', '#6b1d81', '#6d1d81', '#6e1e81', '#701f81', '#721f81', '#732081', '#752181', '#762181', '#782281', '#792282', '#7b2382', '#7c2382', '#7e2482', '#802582', '#812581', '#832681', '#842681', '#862781', '#882781', '#892881', '#8b2981', '#8c2981', '#8e2a81', '#902a81', '#912b81', '#932b80', '#942c80', '#962c80', '#982d80', '#992d80', '#9b2e7f', '#9c2e7f', '#9e2f7f', '#a02f7f', '#a1307e', '#a3307e', '#a5317e', '#a6317d', '#a8327d', '#aa337d', '#ab337c', '#ad347c', '#ae347b', '#b0357b', '#b2357b', '#b3367a', '#b5367a', '#b73779', '#b83779', '#ba3878', '#bc3978', '#bd3977', '#bf3a77', '#c03a76', '#c23b75', '#c43c75', '#c53c74', '#c73d73', '#c83e73', '#ca3e72', '#cc3f71', '#cd4071', '#cf4070', '#d0416f', '#d2426f', '#d3436e', '#d5446d', '#d6456c', '#d8456c', '#d9466b', '#db476a', '#dc4869', '#de4968', '#df4a68', '#e04c67', '#e24d66', '#e34e65', '#e44f64', '#e55064', '#e75263', '#e85362', '#e95462', '#ea5661', '#eb5760', '#ec5860', '#ed5a5f', '#ee5b5e', '#ef5d5e', '#f05f5e', '#f1605d', '#f2625d', '#f2645c', '#f3655c', '#f4675c', '#f4695c', '#f56b5c', '#f66c5c', '#f66e5c', '#f7705c', '#f7725c', '#f8745c', '#f8765c', '#f9785d', '#f9795d', '#f97b5d', '#fa7d5e', '#fa7f5e', '#fa815f', '#fb835f', '#fb8560', '#fb8761', '#fc8961', '#fc8a62', '#fc8c63', '#fc8e64', '#fc9065', '#fd9266', '#fd9467', '#fd9668', '#fd9869', '#fd9a6a', '#fd9b6b', '#fe9d6c', '#fe9f6d', '#fea16e', '#fea36f', '#fea571', '#fea772', '#fea973', '#feaa74', '#feac76', '#feae77', '#feb078', '#feb27a', '#feb47b', '#feb67c', '#feb77e', '#feb97f', '#febb81', '#febd82', '#febf84', '#fec185', '#fec287', '#fec488', '#fec68a', '#fec88c', '#feca8d', '#fecc8f', '#fecd90', '#fecf92', '#fed194', '#fed395', '#fed597', '#fed799', '#fed89a', '#fdda9c', '#fddc9e', '#fddea0', '#fde0a1', '#fde2a3', '#fde3a5', '#fde5a7', '#fde7a9', '#fde9aa', '#fdebac', '#fcecae', '#fceeb0', '#fcf0b2', '#fcf2b4', '#fcf4b6', '#fcf6b8', '#fcf7b9', '#fcf9bb', '#fcfbbd', '#fcfdbf'];
    return data[Math.floor(x * 255)];
  },
  plasma: function(x) {
    var data = ['#0d0887', '#100788', '#130789', '#16078a', '#19068c', '#1b068d', '#1d068e', '#20068f', '#220690', '#240691', '#260591', '#280592', '#2a0593', '#2c0594', '#2e0595', '#2f0596', '#310597', '#330597', '#350498', '#370499', '#38049a', '#3a049a', '#3c049b', '#3e049c', '#3f049c', '#41049d', '#43039e', '#44039e', '#46039f', '#48039f', '#4903a0', '#4b03a1', '#4c02a1', '#4e02a2', '#5002a2', '#5102a3', '#5302a3', '#5502a4', '#5601a4', '#5801a4', '#5901a5', '#5b01a5', '#5c01a6', '#5e01a6', '#6001a6', '#6100a7', '#6300a7', '#6400a7', '#6600a7', '#6700a8', '#6900a8', '#6a00a8', '#6c00a8', '#6e00a8', '#6f00a8', '#7100a8', '#7201a8', '#7401a8', '#7501a8', '#7701a8', '#7801a8', '#7a02a8', '#7b02a8', '#7d03a8', '#7e03a8', '#8004a8', '#8104a7', '#8305a7', '#8405a7', '#8606a6', '#8707a6', '#8808a6', '#8a09a5', '#8b0aa5', '#8d0ba5', '#8e0ca4', '#8f0da4', '#910ea3', '#920fa3', '#9410a2', '#9511a1', '#9613a1', '#9814a0', '#99159f', '#9a169f', '#9c179e', '#9d189d', '#9e199d', '#a01a9c', '#a11b9b', '#a21d9a', '#a31e9a', '#a51f99', '#a62098', '#a72197', '#a82296', '#aa2395', '#ab2494', '#ac2694', '#ad2793', '#ae2892', '#b02991', '#b12a90', '#b22b8f', '#b32c8e', '#b42e8d', '#b52f8c', '#b6308b', '#b7318a', '#b83289', '#ba3388', '#bb3488', '#bc3587', '#bd3786', '#be3885', '#bf3984', '#c03a83', '#c13b82', '#c23c81', '#c33d80', '#c43e7f', '#c5407e', '#c6417d', '#c7427c', '#c8437b', '#c9447a', '#ca457a', '#cb4679', '#cc4778', '#cc4977', '#cd4a76', '#ce4b75', '#cf4c74', '#d04d73', '#d14e72', '#d24f71', '#d35171', '#d45270', '#d5536f', '#d5546e', '#d6556d', '#d7566c', '#d8576b', '#d9586a', '#da5a6a', '#da5b69', '#db5c68', '#dc5d67', '#dd5e66', '#de5f65', '#de6164', '#df6263', '#e06363', '#e16462', '#e26561', '#e26660', '#e3685f', '#e4695e', '#e56a5d', '#e56b5d', '#e66c5c', '#e76e5b', '#e76f5a', '#e87059', '#e97158', '#e97257', '#ea7457', '#eb7556', '#eb7655', '#ec7754', '#ed7953', '#ed7a52', '#ee7b51', '#ef7c51', '#ef7e50', '#f07f4f', '#f0804e', '#f1814d', '#f1834c', '#f2844b', '#f3854b', '#f3874a', '#f48849', '#f48948', '#f58b47', '#f58c46', '#f68d45', '#f68f44', '#f79044', '#f79143', '#f79342', '#f89441', '#f89540', '#f9973f', '#f9983e', '#f99a3e', '#fa9b3d', '#fa9c3c', '#fa9e3b', '#fb9f3a', '#fba139', '#fba238', '#fca338', '#fca537', '#fca636', '#fca835', '#fca934', '#fdab33', '#fdac33', '#fdae32', '#fdaf31', '#fdb130', '#fdb22f', '#fdb42f', '#fdb52e', '#feb72d', '#feb82c', '#feba2c', '#febb2b', '#febd2a', '#febe2a', '#fec029', '#fdc229', '#fdc328', '#fdc527', '#fdc627', '#fdc827', '#fdca26', '#fdcb26', '#fccd25', '#fcce25', '#fcd025', '#fcd225', '#fbd324', '#fbd524', '#fbd724', '#fad824', '#fada24', '#f9dc24', '#f9dd25', '#f8df25', '#f8e125', '#f7e225', '#f7e425', '#f6e626', '#f6e826', '#f5e926', '#f5eb27', '#f4ed27', '#f3ee27', '#f3f027', '#f2f227', '#f1f426', '#f1f525', '#f0f724', '#f0f921'];
    return data[Math.floor(x * 255)];
  },
  viridis: function(x) {
    var data = ['#440154', '#440256', '#450457', '#450559', '#46075a', '#46085c', '#460a5d', '#460b5e', '#470d60', '#470e61', '#471063', '#471164', '#471365', '#481467', '#481668', '#481769', '#48186a', '#481a6c', '#481b6d', '#481c6e', '#481d6f', '#481f70', '#482071', '#482173', '#482374', '#482475', '#482576', '#482677', '#482878', '#482979', '#472a7a', '#472c7a', '#472d7b', '#472e7c', '#472f7d', '#46307e', '#46327e', '#46337f', '#463480', '#453581', '#453781', '#453882', '#443983', '#443a83', '#443b84', '#433d84', '#433e85', '#423f85', '#424086', '#424186', '#414287', '#414487', '#404588', '#404688', '#3f4788', '#3f4889', '#3e4989', '#3e4a89', '#3e4c8a', '#3d4d8a', '#3d4e8a', '#3c4f8a', '#3c508b', '#3b518b', '#3b528b', '#3a538b', '#3a548c', '#39558c', '#39568c', '#38588c', '#38598c', '#375a8c', '#375b8d', '#365c8d', '#365d8d', '#355e8d', '#355f8d', '#34608d', '#34618d', '#33628d', '#33638d', '#32648e', '#32658e', '#31668e', '#31678e', '#31688e', '#30698e', '#306a8e', '#2f6b8e', '#2f6c8e', '#2e6d8e', '#2e6e8e', '#2e6f8e', '#2d708e', '#2d718e', '#2c718e', '#2c728e', '#2c738e', '#2b748e', '#2b758e', '#2a768e', '#2a778e', '#2a788e', '#29798e', '#297a8e', '#297b8e', '#287c8e', '#287d8e', '#277e8e', '#277f8e', '#27808e', '#26818e', '#26828e', '#26828e', '#25838e', '#25848e', '#25858e', '#24868e', '#24878e', '#23888e', '#23898e', '#238a8d', '#228b8d', '#228c8d', '#228d8d', '#218e8d', '#218f8d', '#21908d', '#21918c', '#20928c', '#20928c', '#20938c', '#1f948c', '#1f958b', '#1f968b', '#1f978b', '#1f988b', '#1f998a', '#1f9a8a', '#1e9b8a', '#1e9c89', '#1e9d89', '#1f9e89', '#1f9f88', '#1fa088', '#1fa188', '#1fa187', '#1fa287', '#20a386', '#20a486', '#21a585', '#21a685', '#22a785', '#22a884', '#23a983', '#24aa83', '#25ab82', '#25ac82', '#26ad81', '#27ad81', '#28ae80', '#29af7f', '#2ab07f', '#2cb17e', '#2db27d', '#2eb37c', '#2fb47c', '#31b57b', '#32b67a', '#34b679', '#35b779', '#37b878', '#38b977', '#3aba76', '#3bbb75', '#3dbc74', '#3fbc73', '#40bd72', '#42be71', '#44bf70', '#46c06f', '#48c16e', '#4ac16d', '#4cc26c', '#4ec36b', '#50c46a', '#52c569', '#54c568', '#56c667', '#58c765', '#5ac864', '#5cc863', '#5ec962', '#60ca60', '#63cb5f', '#65cb5e', '#67cc5c', '#69cd5b', '#6ccd5a', '#6ece58', '#70cf57', '#73d056', '#75d054', '#77d153', '#7ad151', '#7cd250', '#7fd34e', '#81d34d', '#84d44b', '#86d549', '#89d548', '#8bd646', '#8ed645', '#90d743', '#93d741', '#95d840', '#98d83e', '#9bd93c', '#9dd93b', '#a0da39', '#a2da37', '#a5db36', '#a8db34', '#aadc32', '#addc30', '#b0dd2f', '#b2dd2d', '#b5de2b', '#b8de29', '#bade28', '#bddf26', '#c0df25', '#c2df23', '#c5e021', '#c8e020', '#cae11f', '#cde11d', '#d0e11c', '#d2e21b', '#d5e21a', '#d8e219', '#dae319', '#dde318', '#dfe318', '#e2e418', '#e5e419', '#e7e419', '#eae51a', '#ece51b', '#efe51c', '#f1e51d', '#f4e61e', '#f6e620', '#f8e621', '#fbe723', '#fde725'];
    return data[Math.floor(x * 255)];
  }
};

function random() {
  do {
    var ret = beta_distribution(options.distribution.alpha, options.distribution.beta);
  } while (ret >= 1);
  return ret;
}

function SortingVisualization(data, options, ctx) {
  this.original_data = [];
  this.swaps = [];
  for (var i = 0; i < data.length; i++) {
    this.original_data.push(data[i].slice());
    this.swaps.push([]);
    // debugger
  }

  this.data = data;

  this.options = options;
  this.ctx = ctx;
}

SortingVisualization.prototype.cmp = function(x, y) {
  return x < y;
};

SortingVisualization.prototype.swap = function(y, x1, x2) {
  var temp = this.data[y][x1];
  this.data[y][x1] = this.data[y][x2];
  this.data[y][x2] = temp;

  this.swaps[y].push([x1, x2]);
};

let steps1 = [];
let steps2 = [];
SortingVisualization.prototype.compare_and_swap = async function(y, x1, x2) {
  if (this.cmp(this.data[y][x1], this.data[y][x2])) {
    this.swap(y, x1, x2);
    // debugger
    console.log(this.original_data);
    // console.log(this.data);
    steps1.push(this.original_data);
    steps2.push(this.data);  
    return true;
  }
  return false;
};

SortingVisualization.prototype.is_sorted = async function(y) {
  // debugger
  for (var i = 0; i < this.data[y].length - 1; i++) {
    if (!this.cmp(this.data[y][i], this.data[y][i + 1])) {
      // debugger
      // steps.push(this.data);
      return false;
    }
  }

  // debugger
  await console.log(steps1);
  await console.log(steps2);
  return true;
}

SortingVisualization.prototype.sort_end = async function() {
  for (var y = 0; y < this.swaps.length; y++) {
    this.swaps[y].reverse();
  }
  await console.log(steps1);
  await console.log(steps2);
  // debugger;

  this.data = this.original_data;
  // debugger
  // console.log(steps);
};

SortingVisualization.prototype.step = async function() {
  // let steps = [];
  var swapped = false;
  var zoom = this.options.zoom;

  for (var y = 0; y < this.swaps.length; y++) {
    if (this.swaps[y].length) {
      swapped = true;
      
      var step = this.swaps[y].pop();
      var x1 = step[0], x2 = step[1];
      
      var temp = this.original_data[y][x1];
      this.original_data[y][x1] = this.original_data[y][x2];
      this.original_data[y][x2] = temp;
      // debugger
      console.log(this.original_data);
      console.log(this.data);
      steps1.push(this.original_data);
      steps2.push(this.data);


      this.ctx.fillStyle = color_maps[this.options.color_map](this.original_data[y][x1] / this.original_data[y].length);
      this.ctx.fillRect(x1 * zoom, y * zoom, zoom, zoom);

      this.ctx.fillStyle = color_maps[this.options.color_map](this.original_data[y][x2] / this.original_data[y].length);
      this.ctx.fillRect(x2 * zoom, y * zoom, zoom, zoom);
    }
  }

  // fs.writeFile("sortData.json", JSON.stringify(steps), function(err) {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
  // console.log(steps);
  return !swapped;
};


function NonSwappingSortingVisualization() {
  SortingVisualization.apply(this, arguments);
  this.stack = [];
  for (var i = 0; i < this.data.length; i++) {
    this.stack.push([]);
  }
}

NonSwappingSortingVisualization.prototype = Object.create(SortingVisualization.prototype);
NonSwappingSortingVisualization.prototype.constructor = SortingVisualization;

NonSwappingSortingVisualization.prototype.sort_end = function() {
  SortingVisualization.prototype.sort_end.apply(this, arguments);
  for (var y = 0; y < this.stack.length; y++) {
    this.stack[y].reverse();
  }

  this.data = this.original_data;
  draw(this.ctx, this.data, false);
};

NonSwappingSortingVisualization.prototype.step = function(have_to_draw) {
  for (var y = 0; y < this.stack.length; y++) {
    if (!this.stack[y].length) {
      draw(this.ctx, this.data, false);
      return true;
    }

    var data = this.stack[y].pop();
    var left = data[0], result = data[1];

    for (var i = 0; i < result.length; i++) {
      this.data[y][left + i] = result[i];
    }
  }

  if (have_to_draw) {
    console.log(this.data);
    draw(this.ctx, this.data, false);
  }

  return false;
};


function BubbleSort() {
  SortingVisualization.apply(this, arguments);
}

BubbleSort.prototype = Object.create(SortingVisualization.prototype);
BubbleSort.prototype.constructor = SortingVisualization;

BubbleSort.prototype.sort = function(y, left, right) {
  for (; left <= right; left++) {
    for (var x = left; x <= right; x++) {
      this.compare_and_swap(y, x, left);
    }
  }
};


function InsertionSort() {
  SortingVisualization.apply(this, arguments);
}

InsertionSort.prototype = Object.create(SortingVisualization.prototype);
InsertionSort.prototype.constructor = SortingVisualization;

InsertionSort.prototype.sort = function(y, left, right) {
  for (; left <= right; left++) {
    var j = left;
    while (j > 0 && this.cmp(this.data[y][j], this.data[y][j - 1])) {
      this.swap(y, j, j - 1);
      j--;
    }
  }
};


function StoogeSort() {
  SortingVisualization.apply(this, arguments);
}

StoogeSort.prototype = Object.create(SortingVisualization.prototype);
StoogeSort.prototype.constructor = SortingVisualization;

StoogeSort.prototype.sort = function(y, left, right) {
  this.compare_and_swap(y, right, left);

  if (right - left >= 2) {
    var t = Math.round((right - left) / 3);
    this.sort(y, left,     right - t);
    this.sort(y, left + t, right);
    this.sort(y, left,     right - t);
  }
};


function SelectionSort() {
  SortingVisualization.apply(this, arguments);
}

SelectionSort.prototype = Object.create(SortingVisualization.prototype);
SelectionSort.prototype.constructor = SortingVisualization;

SelectionSort.prototype.sort = function(y, left, right) {
  for (; left <= right; left++) {
    var min_i = left;
    for (var i = left + 1; i <= right; i++) {
      if (this.cmp(this.data[y][i], this.data[y][min_i])) {
        min_i = i;
      }
    }
    this.swap(y, left, min_i);
  }
};


function CocktailSort() {
  SortingVisualization.apply(this, arguments);
}

CocktailSort.prototype = Object.create(SortingVisualization.prototype);
CocktailSort.prototype.constructor = SortingVisualization;

CocktailSort.prototype.sort = function(y, left, right) {
  var swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = left; i < right - 1; i++) {
      swapped = this.compare_and_swap(y, i + 1, i) || swapped;
    }
    if (!swapped) {
      break;
    }
    swapped = false;
    for (var i = right - 1; i >= 0; i--) {
      swapped = this.compare_and_swap(y, i + 1, i) || swapped;
    }
  }
};


function OddEvenSort() {
  SortingVisualization.apply(this, arguments);
}

OddEvenSort.prototype = Object.create(SortingVisualization.prototype);
OddEvenSort.prototype.constructor = SortingVisualization;

OddEvenSort.prototype.sort = function(y, left, right) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = left + 1; i < right; i += 2) {
      sorted = !this.compare_and_swap(y, i + 1, i) && sorted;
    }

    for (var i = left; i < right; i += 2) {
      sorted = !this.compare_and_swap(y, i + 1, i) && sorted;
    }
  }
};


function ShellSort() {
  SortingVisualization.apply(this, arguments);
}

ShellSort.prototype = Object.create(SortingVisualization.prototype);
ShellSort.prototype.constructor = SortingVisualization;

ShellSort.prototype.sort = function(y, left, right) {
  var gaps = options.gaps.split(',');
  for (var i = 0; i < gaps.length; i++) {
    gaps[i] = parseInt(gaps[i]);
  }
  gaps.sort(function(a, b) {return b - a});

  for (var k = 0; k < gaps.length; k++) {
    var gap = gaps[k];
    for (var i = gap; i <= right; i++) {
      var temp = this.data[y][i];
      for (var j = i; j >= gap && this.cmp(temp, this.data[y][j - gap]); j -= gap) {
        this.swap(y, j, j - gap);
      }
      //this.data[y][j] = temp;
    }
  }
};


function CombSort() {
  SortingVisualization.apply(this, arguments);
}

CombSort.prototype = Object.create(SortingVisualization.prototype);
CombSort.prototype.constructor = SortingVisualization;

CombSort.prototype.sort = function(y, left, right) {
  var gap = right - left;
  var sorted = false;

  while (!sorted) {
    gap = Math.max(Math.floor(gap / options.shrink_factor), 1);
    sorted = gap === 1;

    for (var i = left; i + gap <= right; i++) {
      sorted = !this.compare_and_swap(y, i + gap, i) && sorted;
    }
  }
};


function QuickSort() {
  SortingVisualization.apply(this, arguments);
}

QuickSort.prototype = Object.create(SortingVisualization.prototype);
QuickSort.prototype.constructor = SortingVisualization;

QuickSort.prototype.pivot = function(y, left, right) {
  if (options.pivot === 'Start') {
    return left;
  } else if (options.pivot === 'Middle') {
    return left + Math.floor((right - left) / 2);
  } else if (options.pivot === 'End') {
    return right;
  } else if (options.pivot === 'Random') {
    return left + Math.floor(random() * (right - left));
  }
}

QuickSort.prototype.partition = function(y, pivot, left, right) {
  var store_index = left,
      pivot_value = this.data[y][pivot];

  this.swap(y, pivot, right);

  for (var v = left; v < right; v++) {
    if (this.cmp(this.data[y][v], pivot_value)) {
      this.swap(y, v, store_index++);
    }
  }

  this.swap(y, right, store_index);

  return store_index;
};

QuickSort.prototype.sort = function(y, left, right) {
  if (left > right) {
    return;
  }

  var pivot = this.pivot(y, left, right);
  var new_pivot = this.partition(y, pivot, left, right);

  this.sort(y, left, new_pivot - 1);
  this.sort(y, new_pivot + 1, right);
};


function MergeSort() {
  NonSwappingSortingVisualization.apply(this, arguments);
}

MergeSort.prototype = Object.create(NonSwappingSortingVisualization.prototype);
MergeSort.prototype.constructor = NonSwappingSortingVisualization;

MergeSort.prototype.merge = function(y, left_start, left_end, right_start, right_end) {
  var result = [];

  while (left_start <= left_end || right_start <= right_end) {
    if (left_start <= left_end && right_start <= right_end) {
      if (this.cmp(this.data[y][left_start], this.data[y][right_start])) {
        result.push(this.data[y][left_start++]);
      } else {
        result.push(this.data[y][right_start++]);
      }
    } else if (left_start <= left_end) {
      result.push(this.data[y][left_start++]);
    } else {
      result.push(this.data[y][right_start++]);
    }
  }

  return result;
}

MergeSort.prototype.sort = function(y, left, right) {
  if (right > left) {
    var mid = Math.floor((right + left) / 2);
    this.sort(y, left, mid);
    this.sort(y, mid + 1, right);
    var merge = this.merge(y, left, mid, mid + 1, right);
    for (var i = 0; i < merge.length; i++) {
      this.data[y][left + i] = merge[i];
      this.stack[y].push([left + i, [merge[i]]]);
    }
  }
};


function HeapSort() {
  SortingVisualization.apply(this, arguments);
}

HeapSort.prototype = Object.create(SortingVisualization.prototype);
HeapSort.prototype.constructor = SortingVisualization;

HeapSort.prototype.max_heapify = function(y, i, length) {
  while (true) {
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest = i;

    if (left < length && this.cmp(this.data[y][largest], this.data[y][left])) {
      largest = left;
    }

    if (right < length && this.cmp(this.data[y][largest], this.data[y][right])) {
      largest = right;
    }

    if (i === largest) {
      break;
    }

    this.swap(y, i, largest);
    i = largest;
  }
};

HeapSort.prototype.heapify = function(y, length) {
  for (var i = Math.floor(length / 2); i >= 0; i--) {
    this.max_heapify(y, i, length);
  }
};

HeapSort.prototype.sort = function(y, left, right) {
  this.heapify(y, right);

  for (var i = right; i > 0; i--) {
    this.swap(y, i, 0);
    this.max_heapify(y, 0, i - 1);
  }
};


function RadixSort() {
  NonSwappingSortingVisualization.apply(this, arguments);
}

RadixSort.prototype = Object.create(NonSwappingSortingVisualization.prototype);
RadixSort.prototype.constructor = NonSwappingSortingVisualization;

RadixSort.prototype.sort = function(y, left, right) {
  var data = this.data[y];

  var maxval = Math.max.apply(null, this.data[y].slice(left, right + 1));

  var it = 0;
  while (Math.pow(this.options.base, it) <= maxval) {
    var buckets = [];
    for (var i = 0; i < this.options.base; i++) {
      buckets.push([]);
    }

    for (var i = left; i <= right; i++) {
      var digit = Math.floor(data[i] / Math.pow(this.options.base, it)) % this.options.base;
      buckets[digit].push(data[i]);
    }

    data = [];
    var start = left;
    for (var i = 0; i < buckets.length; i++) {
      for (var j = 0; j < buckets[i].length; j++) {
        data.push(buckets[i][j]);
        this.stack[y].push([start++, [buckets[i][j]]]);
      }
    }

    it++;
  }
};


function SlowSort() {
  SortingVisualization.apply(this, arguments);
}

SlowSort.prototype = Object.create(SortingVisualization.prototype);
SlowSort.prototype.constructor = SortingVisualization;

SlowSort.prototype.sort = function(y, left, right) {
  if (right - left >= 1) {
    var m = Math.floor((right + left) / 2);
    this.sort(y, left, m);
    this.sort(y, m + 1, right);
    this.compare_and_swap(y, right, m);
    this.sort(y, left, right - 1);
  }
};


function BogoSort() {
  SortingVisualization.apply(this, arguments);
}

BogoSort.prototype = Object.create(SortingVisualization.prototype);
BogoSort.prototype.constructor = SortingVisualization;

BogoSort.prototype.sort = function(y, left, right) {
};

BogoSort.prototype.step = function(have_to_draw) {
  // Can't create a list of swaps, as it would create on average O(n!) elements
  var all_sorted = true;
  for (var y = 0; y < this.data.length; y++) {
    if (!this.is_sorted(y)) {
      all_sorted = false;
      shuffle(this.data[y], 0, this.data[y].length);
    }
  }

  if (all_sorted || have_to_draw) {
    draw(this.ctx, this.data, false);
  }

  return all_sorted;
}


var options;

function draw(ctx, data, resize) {
  if (resize) {
    ctx.canvas.width  = options.width  * options.zoom;
    ctx.canvas.height = options.height * options.zoom;

    ctx.canvas.style.width  = canvas.width  + 'px';
    ctx.canvas.style.height = canvas.height + 'px';
  }

  for (var y = 0; y < data.length; y++) {
    for (var x = 0; x < data[y].length; x++) {
      ctx.fillStyle = color_maps[options.color_map](data[y][x] / data[y].length);
      ctx.fillRect(x * options.zoom, y * options.zoom, options.zoom, options.zoom);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // debugger
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var timelapse_canvas = document.getElementById('timelapse_canvas');
  var timelapse_ctx = timelapse_canvas.getContext('2d');

  var processing = false;

  var data, sort_visualization;

  var algorithms = {
    "Bubble sort": BubbleSort,
    "Insertion sort": InsertionSort,
    "Stooge sort": StoogeSort,
    "Selection sort": SelectionSort,
    "Cocktail sort": CocktailSort,
    "Odd-even sort": OddEvenSort,
    "Shell sort": ShellSort,
    "Comb sort": CombSort,
    "Quick sort": QuickSort,
    "Merge sort": MergeSort,
    "Heap sort": HeapSort,
    "Radix sort": RadixSort,
    "Slow sort": SlowSort,
    "Bogo sort": BogoSort
  }

  options = {
    algorithm: 'Bubble sort',
    pivot: 'Start',
    shrink_factor: 1.3,
    base: 2,
    gaps: '701, 301, 132, 57, 23, 10, 4, 1',
    generate: 'Increasing',
    shuffle: function() {
      for (var y = 0; y < data.length; y++) {
        shuffle(data[y], 0, data[y].length);
      }
      draw(ctx, data, false);
    },
    width: 50,
    height: 1,
    speed: 25,
    zoom: 4,
    color_map: 'viridis',
    start: function() {
      hide_gui_element(gui, 'shuffle', true);
      hide_gui_element(gui, 'start', true);
      hide_gui_element(gui, 'stop', false);

      processing = true;

      var algorithm = algorithms[options.algorithm];
      sort_visualization = new algorithm(data, options, ctx);

      for (var y = 0; y < options.height; y++) {
        sort_visualization.sort(y, 0, options.width - 1);
      }
      sort_visualization.sort_end();

      var total_frames = (sort_visualization.stack || sort_visualization.swaps)[0].length;

      var captures = Math.min(
        total_frames,
        Math.max(sort_visualization.data.length, sort_visualization.data[0].length)
      );

      var current_frame = 0;
      var timelapse_y = 0;

      timelapse_canvas.width  = canvas.width;
      timelapse_canvas.height = captures * options.zoom;
      timelapse_canvas.style.width  = timelapse_canvas.width  + 'px';
      timelapse_canvas.style.height = timelapse_canvas.height + 'px';

      function step() {
        if (!processing) {
          return;
        }
        for (var i = 0; i < options.speed; i++) {
          if (sort_visualization.step(i === options.speed - 1)) {
            options.stop();
            return;
          }

          if (Math.floor(current_frame / total_frames * captures) !== Math.floor((current_frame + 1) / total_frames * captures)) {
            for (var x = 0; x < sort_visualization.data[0].length; x++) {
              timelapse_ctx.fillStyle = color_maps[options.color_map](sort_visualization.data[0][x] / sort_visualization.data[0].length);
              timelapse_ctx.fillRect(x * options.zoom, timelapse_y * options.zoom, options.zoom, options.zoom);
            }
            timelapse_y++;
          }

          current_frame++;
        }
        requestAnimationFrame(step);
      }

      step();
    },
    stop: function() {
      hide_gui_element(gui, 'shuffle', false);
      hide_gui_element(gui, 'start', false);
      hide_gui_element(gui, 'stop', true);

      data = sort_visualization.data;

      processing = false;
    },
    distribution: {
      alpha: 1,
      beta: 1
    }
  };

  function resize() {
    if (processing) {
      return;
    }

    data = [];
    for (var y = 0; y < options.height; y++) {
      data.push([]);
      if (options.generate === 'Increasing') {
        for (var x = 0; x < options.width; x++) {
          data[y].push(x);
        }
      } else if (options.generate === 'Decreasing') {
        for (var x = options.width - 1; x >= 0; x--) {
          data[y].push(x);
        }
      }
    }

    draw(ctx, data, true);
  }

  resize();

  var gui = new dat.GUI();
  gui.add(options, 'algorithm', Object.keys(algorithms)).name('Algorithm').onChange(function() {
    hide_gui_element(gui, 'pivot', options.algorithm !== 'Quick sort');
    hide_gui_element(gui, 'shrink_factor', options.algorithm !== 'Comb sort');
    hide_gui_element(gui, 'base', options.algorithm !== 'Radix sort');
    hide_gui_element(gui, 'gaps', options.algorithm !== 'Shell sort');
  });
  gui.add(options, 'pivot', ['Start', 'Middle', 'End', 'Random']).name('Pivot');
  gui.add(options, 'shrink_factor', 1.001, 3).name('Shrink factor');
  gui.add(options, 'base', 2, 10, 1).name('Base');
  gui.add(options, 'gaps').name('Gaps');
  gui.add(options, 'generate', ['Increasing', 'Decreasing']).name('Generate').onChange(resize);
  gui.add(options, 'shuffle').name('Shuffle');

  gui.add(options, 'width', 1, window.innerWidth, 1).name('Width').onChange(resize);
  gui.add(options, 'height', 1, window.innerHeight, 1).name('Height').onChange(resize);
  gui.add(options, 'speed', 1, 25, 1).name('Speed');
  gui.add(options, 'zoom', 1, 10, 1).name('Zoom').onChange(function() {
    draw(ctx, processing ? sort_visualization.data : data, true);
  });
  gui.add(options, 'color_map', Object.keys(color_maps)).name('Color map').onChange(function() {
    draw(ctx, processing ? sort_visualization.data : data, false);
  });

  gui.add(options, 'start').name('Start');
  gui.add(options, 'stop').name('Stop');

  var distribution_folder = gui.addFolder('Beta distribution');
  distribution_folder.add(options.distribution, 'alpha', 0.01).name('Alpha');
  distribution_folder.add(options.distribution, 'beta', 0.01).name('Beta');

  hide_gui_element(gui, 'stop', true);
  hide_gui_element(gui, 'pivot', true);
  hide_gui_element(gui, 'shrink_factor', true);
  hide_gui_element(gui, 'base', true);
  hide_gui_element(gui, 'gaps', true);
});
