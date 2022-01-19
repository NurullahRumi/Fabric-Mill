/* v1.08 autocompplete validation focus*/

var cgen = cgen || {};
cgen.WM = {};

cgen.DatasetRowQuery = function(Dataset, FieldName, FieldValue) {
    for (var i = 0; i < Dataset.length; i++) {
        if (eval("Dataset[i]." + FieldName + " ===  FieldValue")) {
            return Dataset[i];
        }
    }
};

cgen.WM.WidgetIsNull = function(WidgetObj) {
    if (WidgetObj.datavalue === null || WidgetObj.datavalue === undefined || WidgetObj.datavalue === "") {
        return true;
    } else {
        return false;
    }
};

cgen.WM.SetWidgetValue = function(WidgetObj, FieldValue, FieldName) {
    if (cgen.WM.WidgetIsNull(WidgetObj) || cgen.WM.WidgetIsNull(FieldValue)) {
        if (WidgetObj.datafield === "All Fields") {
            if (WidgetObj._widgettype === "wm-select" || WidgetObj._widgettype === "wm-search" || WidgetObj.fieldDefConfig.widget === "select" || WidgetObj.fieldDefConfig.widget === "autocomplete") {
                var dataset = WidgetObj.dataset;
                WidgetObj.datavalue = cgen.DatasetRowQuery(dataset, FieldName, FieldValue);
                return true;
            }
        } else {
            WidgetObj.datavalue = FieldValue;
            return true;
        }
    } else {
        return false;
    }
};

cgen.WM.ValidateAutocomplete = function(WidgetObj) {
    if (cgen.WM.WidgetIsNull(WidgetObj) || !WidgetObj.queryModel) {
        WidgetObj.datavalue = null;
        return false;
    } else {
        if ((!WidgetObj.datafield) || WidgetObj.datafield === 'All Fields') {
            if (!_.isEqual(WidgetObj.datavalue, WidgetObj.queryModel)) {
                WidgetObj.datavalue = null;
                return false;
            } else {
                return true;
            }

        } else // one value selected
        {
            if (WidgetObj.datavalue !== WidgetObj.queryModel[WidgetObj.datafield]) {
                WidgetObj.datavalue = null;
                return false;
            } else {
                return true;
            }
        };

    }

    if (!WidgetObj.datavalue) {
        WidgetObj.isOpen = true;
        result = WidgetObj.result;
        if (result.length == 1) {}
    }

};

cgen.WM.ValidateTextNumber = function($scope, $event, $isolateScope, dp) {
    if ($isolateScope._widgettype === 'wm-text' && $isolateScope.type === "number") {
        var $el = WM.element($isolateScope.$element);
        if ((!$isolateScope.datavalue && $isolateScope.datavalue != 0) && (!!$isolateScope.$element[0].value || !$isolateScope.$element[0].validity.valid)) {
            if (!!$scope.Variables.notifMsg) {
                $scope.Variables.notifMsg.setAlertType("error");
                $scope.Variables.notifMsg.setMessage('Value must be between ' + $isolateScope.minvalue + ' and ' + $isolateScope.maxvalue);
                $scope.Variables.notifMsg.notify();
            } else {
                alert('Value must be between ' + $isolateScope.minvalue + ' and ' + $isolateScope.maxvalue);
            }

            setWidgetFocus = function($element) {
                //$el.focus();
                var $el2 = $element;
                setTimeout(function() {
                    $el2.focus();
                }, 75)
            }

            setWidgetFocus($el);
            return false;
        }
        if (!!$isolateScope.datavalue) {
            if ($isolateScope.datavalue.toFixed(dp) != $isolateScope.datavalue) {
                var val = (Math.trunc($isolateScope.datavalue * Math.pow(10, dp))) / Math.pow(10, dp);
                if (val !== $isolateScope.datavalue) {
                    $isolateScope.datavalue = val;
                }
            }
        }
    }
    return true;
};

cgen.PageParamDecode = function(link, FieldName) {
    link = "~26" + link;
    var Fieldvalue = link.split('~26' + FieldName + '~3D').pop().split('~26').shift();
    if (!(Fieldvalue === null || Fieldvalue === undefined || Fieldvalue === "")) {
        if (Fieldvalue.indexOf("~20") >= 0) {
            Fieldvalue = Fieldvalue.split("~20").join(" ");
        }
        if (Fieldvalue.indexOf("~25") >= 0) {
            Fieldvalue = Fieldvalue.split("~25").join("%");
        }
        if (Fieldvalue.indexOf("~26") >= 0) {
            Fieldvalue = Fieldvalue.split("~26").join("&");
        }
        if (Fieldvalue.indexOf("~3D") >= 0) {
            Fieldvalue = Fieldvalue.split("~3D").join("=");
        }
        if (Fieldvalue.indexOf("~2F") >= 0) {
            Fieldvalue = Fieldvalue.split("~2F").join("/");
        }
        if (Fieldvalue.indexOf("~23") >= 0) {
            Fieldvalue = Fieldvalue.split("~23").join("#");
        }
        if (Fieldvalue.indexOf("~24") >= 0) {
            Fieldvalue = Fieldvalue.split("~24").join("$");
        }
        if (Fieldvalue.indexOf("~60") >= 0) {
            Fieldvalue = Fieldvalue.split("~60").join("`");
        }
        if (Fieldvalue.indexOf("~27") >= 0) {
            Fieldvalue = Fieldvalue.split("~27").join("‘");
        }
        if (Fieldvalue.indexOf("~3A") >= 0) {
            Fieldvalue = Fieldvalue.split("~3A").join(":");
        }
        if (Fieldvalue.indexOf("~3C") >= 0) {
            Fieldvalue = Fieldvalue.split("~3C").join("<");
        }
        if (Fieldvalue.indexOf("~3E") >= 0) {
            Fieldvalue = Fieldvalue.split("~3E").join(">");
        }
        if (Fieldvalue.indexOf("~5B") >= 0) {
            Fieldvalue = Fieldvalue.split("~5B").join("[");
        }
        if (Fieldvalue.indexOf("~5D") >= 0) {
            Fieldvalue = Fieldvalue.split("~5D").join("]");
        }
        if (Fieldvalue.indexOf("~7B") >= 0) {
            Fieldvalue = Fieldvalue.split("~7B").join("{");
        }
        if (Fieldvalue.indexOf("~7D") >= 0) {
            Fieldvalue = Fieldvalue.split("~7D").join("}");
        }
        if (Fieldvalue.indexOf("~22") >= 0) {
            Fieldvalue = Fieldvalue.split("~22").join("“");
        }
        if (Fieldvalue.indexOf("~2B") >= 0) {
            Fieldvalue = Fieldvalue.split("~2B").join("+");
        }
        if (Fieldvalue.indexOf("~25") >= 0) {
            Fieldvalue = Fieldvalue.split("~25").join("%");
        }
        if (Fieldvalue.indexOf("~40") >= 0) {
            Fieldvalue = Fieldvalue.split("~40").join("@");
        }
        if (Fieldvalue.indexOf("~3B") >= 0) {
            Fieldvalue = Fieldvalue.split("~3B").join(";");
        }
        if (Fieldvalue.indexOf("~3F") >= 0) {
            Fieldvalue = Fieldvalue.split("~3F").join("?");
        }
        if (Fieldvalue.indexOf("~5E") >= 0) {
            Fieldvalue = Fieldvalue.split("~5E").join("^");
        }
        if (Fieldvalue.indexOf("~7C") >= 0) {
            Fieldvalue = Fieldvalue.split("~7C").join("|");
        }
        if (Fieldvalue.indexOf("~2C") >= 0) {
            Fieldvalue = Fieldvalue.split("~2C").join(",");
        }
        return Fieldvalue;
    } else {
        return "";
    }
};

cgen.PageParamEncode = function(link) {
    if (link.indexOf("?pParam1=") >= 0) {
        link = link.replace("?pParam1=", "");
    }
    if (link.indexOf(" ") >= 0) {
        link = link.split(" ").join("~20");
    }
    if (link.indexOf("&") >= 0) {
        link = link.split("&").join("~26");
    }
    if (link.indexOf("=") >= 0) {
        link = link.split("=").join("~3D");
    }
    if (link.indexOf("/") >= 0) {
        link = link.split("/").join("~2F");
    }
    if (link.indexOf("%") >= 0) {
        link = link.split("%").join("~25");
    }
    if (link.indexOf("#") >= 0) {
        link = link.split("#").join("~23");
    }
    if (link.indexOf("$") >= 0) {
        link = link.split("$").join("~24");
    }
    if (link.indexOf("`") >= 0) {
        link = link.split("`").join("~60");
    }
    if (link.indexOf("‘") >= 0) {
        link = link.split("‘").join("~27");
    }
    if (link.indexOf(":") >= 0) {
        link = link.split(":").join("~3A");
    }
    if (link.indexOf("<") >= 0) {
        link = link.split("<").join("~3C");
    }
    if (link.indexOf(">") >= 0) {
        link = link.split(">").join("~3E");
    }
    if (link.indexOf("[") >= 0) {
        link = link.split("[").join("~5B");
    }
    if (link.indexOf("]") >= 0) {
        link = link.split("]").join("~5D");
    }
    if (link.indexOf("{") >= 0) {
        link = link.split("{").join("~7B");
    }
    if (link.indexOf("}") >= 0) {
        link = link.split("}").join("~7D");
    }
    if (link.indexOf("“") >= 0) {
        link = link.split("“").join("~22");
    }
    if (link.indexOf("+") >= 0) {
        link = link.split("+").join("~2B");
    }
    if (link.indexOf("@") >= 0) {
        link = link.split("@").join("~40");
    }
    if (link.indexOf(";") >= 0) {
        link = link.split(";").join("~3B");
    }
    if (link.indexOf("?") >= 0) {
        link = link.split("?").join("~3F");
    }
    if (link.indexOf("^") >= 0) {
        link = link.split("^").join("~5E");
    }
    if (link.indexOf("|") >= 0) {
        link = link.split("|").join("~7C");
    }
    if (link.indexOf(",") >= 0) {
        link = link.split(",").join("~2C");
    }
    link = "?pParam1=" + link;
    return link;
}

cgen.TableSetCurrentPage = function(DatagridWidget) {
    try {
        DatagridWidget.cgenPageNum = DatagridWidget.dataNavigator.dn.currentPage;
    } catch (err) {}
}

cgen.TableGoToPage = function(DatagridWidget) {
    try {
        if (DatagridWidget.cgenPageNum && DatagridWidget.dataNavigator.dn.currentPage !== DatagridWidget.cgenPageNum) {
            DatagridWidget.dataNavigator.dn.currentPage = DatagridWidget.cgenPageNum;
            DatagridWidget.cgenPageNum = undefined;
            DatagridWidget.dataNavigator.goToPage();
        }
    } catch (err) {}
}