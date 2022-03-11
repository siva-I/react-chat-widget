/* eslint-disable */
// ComponentOrchestration.js
const componentWorkflow = {
  start: "ContentSuggestionQuery",
  components: {
    ContentSuggestionQuery: {
      componentName: "ContentSuggestionQuery",
      type: "Component",
      callback: {
        showingResults: "EndFlow",
        noResults: "InlineChat",
        error: "InlineChat",
      },
    },
    InlineChat: {
      componentName: "InlineChat",
      type: "Component",
      componentData: {
        defaultSupportSkill: "PRE",
        sfdcType: "Pre-Sales",
        sfdcTopic: "Purchase Help",
        type: "sales",
      },
      callback: {
        success: "EndFlow",
        AgentUnavailable: "ModalityFallback",
        error: "Fallback",
      },
    },
    Fallback: {
      componentName: "LeadGen",
      type: "Component",
      componentData: {
        UserData: {},
      },
      callback: {
        success: "EndFlow",
        optOut: "ModalityFallback",
      },
    },
    ModalityFallback: {
      componentName: "ContactFallback",
      type: "Component",
      componentData: {
        UserData: {},
      },
      callback: {
        success: "EndFlow",
        optOut: "ThankYou",
      },
    },
    EndFlow: {
      componentName: "EndFlow",
      type: "Component",
      callback: {
        Yes: "ContentSuggestionQuery",
        No: "ThankYou",
      },
    },
    ThankYou: {
      componentName: "ThankYou",
      type: "Component",
    },
  },
};
// Derive the mapping from the above workflow.
const workflowKeyMap = {
  start: "ContentSuggestionQuery",
  ContentSuggestionQuery_showingResults: "EndFlow",
  ContentSuggestionQuery_noResults: "InlineChat",
  ContentSuggestionQuery_error: "InlineChat",
  InlineChat_success: "EndFlow",
  InlineChat_AgentUnavailable: "ModalityFallback",
  InlineChat_error: "Fallback",
  Fallback_success: "EndFlow",
  Fallback_optOut: "ModalityFallback",
  ModalityFallback_success: "EndFlow",
  ModalityFallback_optOut: "ThankYou",
  EndFlow_Yes: "ContentSuggestionQuery",
  EndFlow_No: "ThankYou",
};

const showingnowMAp = {
  ContentSuggestionQuery: { dataFromState },
  ContentSuggestionQuery_showingResults: { dataFromState },
};

export { workflowKeyMap, componentWorkflow };
