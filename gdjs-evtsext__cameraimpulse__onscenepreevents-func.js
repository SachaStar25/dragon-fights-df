
if (typeof gdjs.evtsExt__CameraImpulse__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__onScenePreEvents = {};
gdjs.evtsExt__CameraImpulse__onScenePreEvents.idToCallbackMap = new Map();


gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference2 = eventsFunctionContext.localVariables[0].getFromIndex(0);
const valueIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0) - (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getChild("CameraDeltaX").getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0) - (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(4).getChild("CameraDeltaY").getAsNumber()), eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString(), 0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString()).getChild("CameraDeltaX").setNumber(0);
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString()).getChild("CameraDeltaY").setNumber(0);
}
}
}
}

}


};gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("LayerName", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__CameraImpulse__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraImpulse__onScenePreEvents.eventsList2(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraImpulse__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraImpulse__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
