
if (typeof gdjs.evtsExt__CameraImpulse__AddImpulse !== "undefined") {
  gdjs.evtsExt__CameraImpulse__AddImpulse.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__AddImpulse = {};
gdjs.evtsExt__CameraImpulse__AddImpulse.idToCallbackMap = new Map();


gdjs.evtsExt__CameraImpulse__AddImpulse.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("Layer").setString(eventsFunctionContext.getArgument("LayerName"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("DeltaX").setNumber(eventsFunctionContext.getArgument("DisplacementX"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("DeltaY").setNumber(eventsFunctionContext.getArgument("DisplacementY"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("AwayDuration").setNumber(eventsFunctionContext.getArgument("AwayDuration"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("StayDuration").setNumber(eventsFunctionContext.getArgument("StayDuration"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("BackDuration").setNumber(eventsFunctionContext.getArgument("BackDuration"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("AwayEasing").setString(eventsFunctionContext.getArgument("AwayEasing"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("BackEasing").setString(eventsFunctionContext.getArgument("BackEasing"));
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("NewIdentifier")).getChild("Time").setNumber(0);
}
}

}


};

gdjs.evtsExt__CameraImpulse__AddImpulse.func = function(runtimeScene, NewIdentifier, LayerName, DisplacementX, DisplacementY, AwayDuration, AwayEasing, StayDuration, BackDuration, BackEasing, parentEventsFunctionContext) {
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
if (argName === "NewIdentifier") return NewIdentifier;
if (argName === "LayerName") return LayerName;
if (argName === "DisplacementX") return DisplacementX;
if (argName === "DisplacementY") return DisplacementY;
if (argName === "AwayDuration") return AwayDuration;
if (argName === "AwayEasing") return AwayEasing;
if (argName === "StayDuration") return StayDuration;
if (argName === "BackDuration") return BackDuration;
if (argName === "BackEasing") return BackEasing;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraImpulse__AddImpulse.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraImpulse__AddImpulse.registeredGdjsCallbacks = [];