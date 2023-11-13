export function ajaxRequest(method, url, data = null, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        var responseData = JSON.parse(xhr.responseText);
        callback(null, responseData);
      } else if (xhr.status == 404) {
        var responseData = JSON.parse(xhr.responseText);
        callback(null, responseData);
      } else if (xhr.status == 500) {
        var responseData = JSON.parse(xhr.responseText);
        callback(null, responseData);
      } else {
        callback("Erreur lors de la requête: " + xhr.status, null);
      }
    };

    xhr.onerror = function () {
      callback("Erreur réseau", null);
    };

    if (method === "POST") {
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  }

