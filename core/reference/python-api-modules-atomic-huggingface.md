<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Huggingface

Source-backed signatures for **38 declarations** across **10 files** in the modules: atomic / huggingface area.

## `src/core/modules/atomic/huggingface/_base.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class HuggingFaceTaskExecutor` | Base executor for HuggingFace tasks. | [`src/core/modules/atomic/huggingface/_base.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L21) |
| method | `def HuggingFaceTaskExecutor.__init__(self, task_type: str)` | Initialize executor for a specific task type. | [`src/core/modules/atomic/huggingface/_base.py:29`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L29) |
| method | `async def HuggingFaceTaskExecutor.execute(self, model_id: str, inputs: Any, prefer_local: bool=True, **kwargs) -> Dict&#91;str, Any&#93;` | Execute the HuggingFace task. | [`src/core/modules/atomic/huggingface/_base.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L38) |
| method | `async def HuggingFaceTaskExecutor.execute_with_file(self, model_id: str, file_path: str, file_type: str='File', prefer_local: bool=True, **kwargs) -> Dict&#91;str, Any&#93;` | Execute task with file input. | [`src/core/modules/atomic/huggingface/_base.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L88) |
| method | `async def HuggingFaceTaskExecutor._execute_local(self, model_path: str, inputs: Any, **kwargs) -> Any` | Execute task locally using transformers pipeline | [`src/core/modules/atomic/huggingface/_base.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L149) |
| method | `async def HuggingFaceTaskExecutor._execute_api(self, model_id: str, inputs: Any, **kwargs) -> Any` | Execute task via Inference API | [`src/core/modules/atomic/huggingface/_base.py:163`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L163) |
| function | `def validate_file_exists(file_path: str, file_type: str='File') -> None` | Validate that a file exists. | [`src/core/modules/atomic/huggingface/_base.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L178) |
| function | `def read_file_bytes(file_path: str) -> bytes` | Read file contents as bytes. | [`src/core/modules/atomic/huggingface/_base.py:199`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L199) |
| function | `def normalize_text_result(result: Any) -> str` | Normalize various result formats to a text string. | [`src/core/modules/atomic/huggingface/_base.py:213`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L213) |
| function | `def normalize_classification_result(result: Any) -> Dict&#91;str, Any&#93;` | Normalize classification result to standard format. | [`src/core/modules/atomic/huggingface/_base.py:238`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_base.py#L238) |

## `src/core/modules/atomic/huggingface/_runtime.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RuntimeMode(Enum)` | Execution mode for HuggingFace models | [`src/core/modules/atomic/huggingface/_runtime.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L34) |
| class | `class RuntimePolicy` | Result of runtime policy resolution | [`src/core/modules/atomic/huggingface/_runtime.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L41) |
| class | `class HuggingFaceRuntime` | HuggingFace Runtime Manager | [`src/core/modules/atomic/huggingface/_runtime.py:51`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L51) |
| method | `def HuggingFaceRuntime.get_installed_model(cls, model_id: str) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Get installed model info from storage. | [`src/core/modules/atomic/huggingface/_runtime.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L62) |
| method | `def HuggingFaceRuntime.is_offline_mode(cls) -> bool` | Check if running in offline mode | [`src/core/modules/atomic/huggingface/_runtime.py:91`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L91) |
| method | `def HuggingFaceRuntime.get_hf_token(cls) -> Optional&#91;str&#93;` | Get HuggingFace token from environment | [`src/core/modules/atomic/huggingface/_runtime.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L96) |
| method | `def HuggingFaceRuntime.resolve_policy(cls, model_id: str, prefer_local: bool=True) -> RuntimePolicy` | Resolve runtime execution policy for a model. | [`src/core/modules/atomic/huggingface/_runtime.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L101) |
| function | `async def run_local_pipeline(task: str, model_path: str, inputs: Any, **kwargs) -> Any` | Run a HuggingFace pipeline locally. | [`src/core/modules/atomic/huggingface/_runtime.py:177`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L177) |
| method | `def run_local_pipeline._run()` | Implements `run_local_pipeline._run`; linked source is authoritative. | [`src/core/modules/atomic/huggingface/_runtime.py:195`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L195) |
| function | `async def run_inference_api(model_id: str, inputs: Any, task: Optional&#91;str&#93;=None, **kwargs) -> Any` | Run inference via HuggingFace Inference API. | [`src/core/modules/atomic/huggingface/_runtime.py:207`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/_runtime.py#L207) |

## `src/core/modules/atomic/huggingface/constants.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class DownloadStatus` | Model download status constants | [`src/core/modules/atomic/huggingface/constants.py:35`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L35) |
| class | `class TaskType` | HuggingFace pipeline task type constants | [`src/core/modules/atomic/huggingface/constants.py:47`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L47) |
| class | `class ModuleDefaults` | Default values for module metadata | [`src/core/modules/atomic/huggingface/constants.py:106`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L106) |
| class | `class Subcategory` | Module subcategory constants | [`src/core/modules/atomic/huggingface/constants.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L121) |
| class | `class ModuleColors` | UI colors for different task modules | [`src/core/modules/atomic/huggingface/constants.py:132`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L132) |
| class | `class ParamDefaults` | Default values for module parameters | [`src/core/modules/atomic/huggingface/constants.py:156`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L156) |
| class | `class ResultKeys` | Keys used in HuggingFace result parsing | [`src/core/modules/atomic/huggingface/constants.py:182`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L182) |
| class | `class ErrorMessages` | Standardized error messages | [`src/core/modules/atomic/huggingface/constants.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L196) |
| method | `def ErrorMessages.format(cls, template: str, **kwargs) -> str` | Format an error message with parameters | [`src/core/modules/atomic/huggingface/constants.py:205`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/constants.py#L205) |

## `src/core/modules/atomic/huggingface/embedding.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def normalize_embedding(embedding: List&#91;float&#93;) -> List&#91;float&#93;` | Normalize embedding vector to unit length | [`src/core/modules/atomic/huggingface/embedding.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/embedding.py#L23) |
| function | `def extract_embedding(result: Any) -> List&#91;float&#93;` | Extract embedding from various result formats | [`src/core/modules/atomic/huggingface/embedding.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/embedding.py#L31) |
| function | `async def huggingface_embedding(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate text embeddings using HuggingFace models | [`src/core/modules/atomic/huggingface/embedding.py:91`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/embedding.py#L91) |

## `src/core/modules/atomic/huggingface/image_classification.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def huggingface_image_classification(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Classify images using HuggingFace models | [`src/core/modules/atomic/huggingface/image_classification.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/image_classification.py#L67) |

## `src/core/modules/atomic/huggingface/speech_to_text.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def huggingface_speech_to_text(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Transcribe audio to text using HuggingFace ASR models | [`src/core/modules/atomic/huggingface/speech_to_text.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/speech_to_text.py#L67) |

## `src/core/modules/atomic/huggingface/summarization.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def huggingface_summarization(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate summaries using HuggingFace models | [`src/core/modules/atomic/huggingface/summarization.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/summarization.py#L64) |

## `src/core/modules/atomic/huggingface/text_classification.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def huggingface_text_classification(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Classify text using HuggingFace models | [`src/core/modules/atomic/huggingface/text_classification.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/text_classification.py#L67) |

## `src/core/modules/atomic/huggingface/text_generation.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def huggingface_text_generation(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate text using HuggingFace LLMs | [`src/core/modules/atomic/huggingface/text_generation.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/text_generation.py#L66) |

## `src/core/modules/atomic/huggingface/translation.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def huggingface_translation(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Translate text using HuggingFace models | [`src/core/modules/atomic/huggingface/translation.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/huggingface/translation.py#L64) |
