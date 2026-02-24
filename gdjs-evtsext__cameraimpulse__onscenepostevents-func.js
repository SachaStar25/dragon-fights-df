
if (typeof gdjs.evtsExt__CameraImpulse__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraImpulse__onScenePostEvents = {};
gdjs.evtsExt__CameraImpulse__onScenePostEvents.idToCallbackMap = new Map();


gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString()).getChild("Time").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


};gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() < eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.tween.ease(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayEasing").getAsString(), 0, 1, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() / eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber()));
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() >= eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() < eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("StayDuration").getAsNumber());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(1);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() >= eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("StayDuration").getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.tween.ease(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("BackEasing").getAsString(), 0, 1, (1 - (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber() - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("StayDuration").getAsNumber()) / eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("BackDuration").getAsNumber())));
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString()).getChild("CameraDeltaX").add(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("DeltaX").getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString()).getChild("CameraDeltaY").add(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("DeltaY").getAsNumber() * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString(), 0) + (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString()).getChild("CameraDeltaX").getAsNumber()), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString(), 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString(), 0) + (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString()).getChild("CameraDeltaY").getAsNumber()), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Layer").getAsString(), 0);
}
}

}


};gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() >= eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("StayDuration").getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("BackDuration").getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString());
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("DistanceFactor", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("Time").getAsNumber() < eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("AwayDuration").getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("StayDuration").getAsNumber() + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild("BackDuration").getAsNumber());
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


const keyIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2);
const valueIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0);
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

{ //Subevents: 
gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


{



}


{


const keyIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2);
const valueIteratorReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0);
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

{ //Subevents: 
gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};

gdjs.evtsExt__CameraImpulse__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CameraImpulse__onScenePostEvents.eventsList3(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__CameraImpulse__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__CameraImpulse__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
