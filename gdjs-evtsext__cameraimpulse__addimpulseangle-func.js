
if (typeof gdjs.evtsExt__CameraImpulse__AddImpulseAngle !== "undefined") {
  gdjs.evtsExt__CameraImpulse__AddImpulseAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__AddImpulseAngle = {};
gdjs.evtsExt__CameraImpulse__AddImpulseAngle.idToCallbackMap = new Map();


gdjs.evtsExt__CameraImpulse__AddImpulseAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CameraImpulse__AddImpulse.func(runtimeScene, eventsFunctionContext.getArgument("Identifier"), eventsFunctionContext.getArgument("LayerName"), gdjs.evtTools.common.getXFromAngleAndDistance(eventsFunctionContext.getArgument("Angle"), eventsFunctionContext.getArgument("Amplitude")), gdjs.evtTools.common.getYFromAngleAndDistance(eventsFunctionContext.getArgument("Angle"), eventsFunctionContext.getArgument("Amplitude")), eventsFunctionContext.getArgument("AwayDuration"), eventsFunctionContext.getArgument("AwayEasing"), eventsFunctionContext.getArgument("StayDuration"), eventsFunctionContext.getArgument("BackDuration"), eventsFunctionContext.getArgument("BackEasing"), eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__CameraImpulse__AddImpulseAngle.func = function(runtimeScene, Identifier, LayerName, Amplitude, Angle, AwayDuration, AwayEasing, StayDuration, BackDuration, BackEasing, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraImpulse"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraImpulse"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Identifier") return Identifier;
if (argName === "LayerName") return LayerName;
if (argName === "Amplitude") return Amplitude;
if (argName === "Angle") return Angle;
if (argName === "AwayDuration") return AwayDuration;
if (argName === "AwayEasing") return AwayEasing;
if (argName === "StayDuration") return StayDuration;
if (argName === "BackDuration") return BackDuration;
if (argName === "BackEasing") return BackEasing;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraImpulse__AddImpulseAngle.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraImpulse__AddImpulseAngle.registeredGdjsCallbacks = [];