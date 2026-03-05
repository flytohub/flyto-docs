# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Traitement par lots](#traitement-par-lots) | Traiter les éléments par lots avec une taille configurable |
| [Branchement](#branchement) | Branchement conditionnel base sur l'evaluation d'expression |
| [Point d'arret](#point-d'arret) | Mettre en pause l'execution du workflow pour approbation ou entree humaine |
| [Disjoncteur](#disjoncteur) | Modèle de disjoncteur pour prévenir les pannes en cascade |
| [Conteneur](#conteneur) | Conteneur de sous-flux integre pour organiser des workflows complexes |
| [Débouncer](#débouncer) | Débouncer l'exécution pour éviter les appels répétés rapides |
| [Fin](#fin) | Noeud de fin de workflow explicite |
| [Gestionnaire d'erreurs](#gestionnaire-d'erreurs) | Intercepte et gère les erreurs des nœuds en amont |
| [Déclencheur de workflow d'erreur](#déclencheur-de-workflow-d'erreur) | Point d'entrée pour les workflows d'erreur - déclenché lorsqu'un autre workflow échoue |
| [Pour chaque](#pour-chaque) | Iterer sur une liste et executer des etapes pour chaque element |
| [Fourche](#fourche) | Diviser l'execution en branches paralleles |
| [Aller a](#aller-a) | Saut inconditionnel vers une autre etape |
| [Invoquer le flux de travail](#invoquer-le-flux-de-travail) | Exécuter un fichier de flux de travail externe |
| [Joindre](#joindre) | Attendre que les branches paralleles se terminent |
| [Boucle](#boucle) | Repeter des etapes N fois en utilisant le routage par port de sortie |
| [Fusionner](#fusionner) | Fusionner plusieurs entrees en une seule sortie |
| [Parallèle](#parallèle) | Exécuter plusieurs tâches en parallèle avec différentes stratégies |
| [Limite de Débit](#limite-de-débit) | Limiter le débit d'exécution en utilisant un seau à jetons ou une fenêtre glissante |
| [Réessayer](#réessayer) | Réessayer les opérations échouées avec un backoff configurable |
| [Debut](#debut) | Noeud de debut de workflow explicite |
| [Sous-flux](#sous-flux) | Referencer et executer un workflow externe |
| [Commutateur](#commutateur) | Branchement multiple base sur la correspondance de valeur |
| [Limiter](#limiter) | Limiter le taux d'exécution avec un intervalle minimum |
| [Declencheur](#declencheur) | Point d'entree du workflow - manuel, webhook, planifie ou evenement |

## Modules

### Traitement par lots

`flow.batch`

Traiter les éléments par lots avec une taille configurable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Nombre d'éléments par lot |
| `delay_ms` | number | No | `0` | Millisecondes à attendre entre les lots (pour limiter le débit) |
| `continue_on_error` | boolean | No | `False` | Continuer à traiter les lots restants si un échoue |
| `parallel_batches` | number | No | `1` | Continuer à traiter les lots restants si un échoue |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Nombre de lots à traiter en parallèle (1 pour séquentiel) |
| `batch` | array | Événement pour le routage (lot/terminé/erreur) |
| `batch_index` | number | Événement pour le routage (lot/terminé/erreur) |
| `total_batches` | number | Éléments du lot actuel |
| `total_items` | number | Index du lot actuel (à partir de 0) |
| `is_last_batch` | boolean | Nombre total de lots |
| `progress` | object | Nombre total d'éléments |

**Example:** Example

```yaml
items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
batch_size: 10
```

**Example:** Example

```yaml
items: ${input.records}
batch_size: 100
delay_ms: 1000
```

**Example:** Example

```yaml
items: ${input.data}
batch_size: 50
parallel_batches: 3
continue_on_error: true
```

### Branchement

`flow.branch`

Branchement conditionnel base sur l'evaluation d'expression

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (true/false/error) |
| `outputs` | object | Valeurs de sortie par port |
| `result` | boolean | Resultat du branchement |
| `condition` | string | Valeur de la condition |
| `resolved_condition` | string | Resultat de l'evaluation de la condition |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Point d'arret

`flow.breakpoint`

Mettre en pause l'execution du workflow pour approbation ou entree humaine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Approval Required` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |
| `required_approvers` | array | Yes | - | Array of data items to process |
| `approval_mode` | select (`single`, `all`, `majority`, `first`) | No | `single` | How approvals are counted |
| `custom_fields` | array | Yes | - | Array of data items to process |
| `include_context` | boolean | No | `True` | Whether to include execution context |
| `auto_approve_condition` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (approved/rejected/timeout) |
| `breakpoint_id` | string | ID du point d'arret |
| `status` | string | Statut |
| `approved_by` | array | Approuve par |
| `rejected_by` | array | Rejete par |
| `custom_inputs` | object | Valeurs d'entree personnalisees |
| `comments` | array | Commentaires de revue |
| `resolved_at` | string | Heure de resolution |
| `wait_duration_ms` | integer | Duree d'attente (ms) |

**Example:** Example

```yaml
title: Approve data export
description: Please review and approve the data export
```

**Example:** Example

```yaml
title: Manager Approval Required
description: Large transaction requires manager approval
required_approvers: ["manager@example.com"]
timeout_seconds: 3600
```

**Example:** Example

```yaml
title: Adjustment Required
custom_fields: [{"name": "reason", "label": "Reason", "type": "text", "required": true}, {"name": "amount", "label": "Amount", "type": "number", "required": true}]
```

### Disjoncteur

`flow.circuit_breaker`

Modèle de disjoncteur pour prévenir les pannes en cascade

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Nombre d'échecs avant d'ouvrir le disjoncteur |
| `reset_timeout_ms` | number | No | `60000` | Temps en millisecondes avant que le disjoncteur passe à mi-ouvert |
| `half_open_max` | number | No | `1` | Nombre maximum de requêtes autorisées en état mi-ouvert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Événement pour le routage (autorisé/rejeté/mi-ouvert) |
| `state` | string | État du disjoncteur (fermé/ouvert/mi-ouvert) |
| `failure_count` | number | Nombre d'échecs consécutifs |
| `last_failure_time_ms` | number | Horodatage du dernier échec en millisecondes |
| `time_until_half_open_ms` | number | Millisecondes avant que le disjoncteur passe à mi-ouvert |

**Example:** Example

```yaml
failure_threshold: 5
reset_timeout_ms: 60000
```

**Example:** Example

```yaml
failure_threshold: 2
reset_timeout_ms: 10000
half_open_max: 1
```

**Example:** Example

```yaml
failure_threshold: 20
reset_timeout_ms: 120000
half_open_max: 3
```

### Conteneur

`flow.container`

Conteneur de sous-flux integre pour organiser des workflows complexes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `subflow` | object | No | `{'nodes': [], 'edges': []}` | Embedded workflow definition with nodes and edges |
| `inherit_context` | boolean | No | `True` | Whether to inherit variables from parent workflow |
| `isolated_variables` | array | Yes | - | Array of data items to process |
| `export_variables` | array | Yes | - | Array of data items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (success/error) |
| `outputs` | object | Valeurs de sortie par port |
| `subflow_result` | object | Resultat du sous-flux |
| `exported_variables` | object | Variables exportees |
| `node_count` | integer | Nombre de noeuds |
| `execution_time_ms` | number | Temps d'execution (ms) |

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: true
```

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: false
```

### Débouncer

`flow.debounce`

Débouncer l'exécution pour éviter les appels répétés rapides

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Temps d'attente après le dernier appel avant l'exécution |
| `leading` | boolean | No | `False` | Exécuter sur le bord avant (le premier appel déclenche immédiatement) |
| `trailing` | boolean | No | `True` | Exécuter sur le bord arrière (après expiration du délai) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Événement pour le routage (exécuté/débouncé) |
| `last_call_ms` | number | Horodatage du dernier appel en millisecondes |
| `calls_debounced` | number | Nombre d'appels débouncés depuis la dernière exécution |
| `time_since_last_ms` | number | Temps écoulé depuis le dernier appel en millisecondes |
| `edge` | string | Quel bord a déclenché l'exécution (avant/arrière) |

**Example:** Example

```yaml
delay_ms: 500
```

**Example:** Example

```yaml
delay_ms: 1000
leading: true
trailing: false
```

**Example:** Example

```yaml
delay_ms: 2000
leading: true
trailing: true
```

### Fin

`flow.end`

Noeud de fin de workflow explicite

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (__end__) |
| `ended_at` | string | Heure de fin |
| `workflow_result` | object | Resultat du workflow |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Gestionnaire d'erreurs

`flow.error_handle`

Intercepte et gère les erreurs des nœuds en amont

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Que faire de l'erreur |
| `include_traceback` | boolean | No | `True` | Inclure la trace complète dans la sortie |
| `error_code_mapping` | object | No | `{}` | Inclure la trace complète dans la sortie |
| `fallback_value` | any | No | - | Mapper les codes d'erreur à des actions personnalisées |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Valeur à utiliser lorsque l'erreur est supprimée |
| `outputs` | object | Événement pour le routage (géré/escalade) |
| `error_info` | object | Événement pour le routage (géré/escalade) |
| `action_taken` | string | Action entreprise |

**Example:** Example

```yaml
action: log_and_continue
include_traceback: true
```

**Example:** Example

```yaml
action: suppress
fallback_value: {"status": "skipped", "reason": "upstream_error"}
```

**Example:** Example

```yaml
action: transform
error_code_mapping: {"TIMEOUT": {"retry": true, "delay": 5000}, "NOT_FOUND": {"skip": true}}
```

### Déclencheur de workflow d'erreur

`flow.error_workflow_trigger`

Point d'entrée pour les workflows d'erreur - déclenché lorsqu'un autre workflow échoue

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Description de ce workflow d'erreur |
| `error_context` | object | Événement pour le routage (déclenché) |
| `triggered_at` | string | Horodatage ISO lorsque le workflow d'erreur a été déclenché |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Pour chaque

`flow.foreach`

Iterer sur une liste et executer des etapes pour chaque element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Liste d'elements a iterer (supporte la reference ${variable}) |
| `steps` | array | No | - | Etapes a executer pour chaque element |
| `item_var` | string | No | `item` | Nom de variable pour l'element actuel |
| `index_var` | string | No | `index` | Nom de variable pour l'index actuel |
| `output_mode` | string | No | `collect` | Mode de collecte des resultats |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (iterate/done) |
| `__set_context` | object | Definir le contexte |
| `outputs` | object | Valeurs de sortie par port |
| `iteration` | number | Index d'iteration actuel |
| `status` | string | Statut de l'operation |
| `results` | array | Resultats collectes |
| `count` | number | Nombre total d'elements |

**Example:** Example

```yaml
items: ${steps.csv.result.data}
```

**Example:** Example

```yaml
items: ${search_results}
item_var: element
steps: [{"module": "element.text", "params": {"element_id": "${element}"}, "output": "text"}]
```

### Fourche

`flow.fork`

Diviser l'execution en branches paralleles

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (fork/error) |
| `input_data` | any | Donnees d'entree |
| `branch_count` | integer | Nombre de branches |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Aller a

`flow.goto`

Saut inconditionnel vers une autre etape

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (goto) |
| `target` | string | Etape cible |
| `iteration` | number | Nombre d'iterations |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Invoquer le flux de travail

`flow.invoke`

Exécuter un fichier de flux de travail externe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_source` | string | Yes | - | File path to workflow YAML or inline YAML content |
| `workflow_params` | object | Yes | - | Parameters to pass to the invoked workflow |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Paramètres à passer au flux de travail invoqué |
| `result` | any | Temps d'exécution maximum en secondes |
| `workflow_id` | string | Événement pour le routage (succès/erreur) |
| `execution_time_ms` | number | Résultat de l'exécution du flux de travail |

**Example:** Example

```yaml
workflow_source: workflows/validate_order.yaml
workflow_params: {"order_id": "${input.order_id}"}
timeout_seconds: 60
```

**Example:** Example

```yaml
workflow_source: workflows/process_data.yaml
workflow_params: {"data": "${input.data}"}
output_mapping: {"processed": "result.data"}
```

### Joindre

`flow.join`

Attendre que les branches paralleles se terminent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`all`, `any`, `first`) | No | `all` | How to handle multiple inputs |
| `input_count` | number | No | `2` | Number of ports |
| `timeout` | number | No | `60000` | Maximum time to wait in milliseconds |
| `cancel_pending` | boolean | No | `True` | Cancel pending branches when using first strategy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (joined/timeout/error) |
| `joined_data` | array | Donnees jointes |
| `completed_count` | integer | Nombre de branches terminees |
| `strategy` | string | Strategie de jonction |

**Example:** Example

```yaml
strategy: all
input_count: 2
timeout_ms: 30000
```

**Example:** Example

```yaml
strategy: first
input_count: 3
cancel_pending: true
```

### Boucle

`flow.loop`

Repeter des etapes N fois en utilisant le routage par port de sortie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Nombre de repetitions |
| `target` | string | No | - | Etape cible (obsolete) |
| `steps` | array | No | - | Etapes a executer pour chaque iteration |
| `index_var` | string | No | `index` | Nom de variable pour l'index actuel |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (iterate/done) |
| `outputs` | object | Valeurs de sortie par port |
| `iteration` | number | Iteration actuelle |
| `status` | string | Statut de l'operation |
| `results` | array | Resultats collectes |
| `count` | number | Total des iterations |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Fusionner

`flow.merge`

Fusionner plusieurs entrees en une seule sortie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (merged/error) |
| `merged_data` | any | Donnees fusionnees |
| `input_count` | integer | Nombre d'entrees |
| `strategy` | string | Strategie de fusion |

**Example:** Example

```yaml
strategy: all
input_count: 3
```

**Example:** Example

```yaml
strategy: first
input_count: 2
```

### Parallèle

`flow.parallel`

Exécuter plusieurs tâches en parallèle avec différentes stratégies

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Tableau de définitions de tâches à exécuter en parallèle |
| `mode` | string | No | `all` | Tableau de définitions de tâches à exécuter en parallèle |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Arrêter toutes les tâches à la première erreur (uniquement pour mode=all) |
| `concurrency_limit` | number | No | `0` | Arrêter toutes les tâches à la première erreur (uniquement pour mode=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Nombre maximum de tâches simultanées (0 pour illimité) |
| `results` | array | Événement pour le routage (terminé/partiel/erreur) |
| `completed_count` | number | Événement pour le routage (terminé/partiel/erreur) |
| `failed_count` | number | Résultats de toutes les tâches |
| `total_count` | number | Nombre de tâches complétées avec succès |
| `mode` | string | Nombre de tâches échouées |
| `duration_ms` | number | Nombre total de tâches |

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://api2.example.com"}}]
mode: all
timeout_ms: 30000
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://mirror1.example.com"}}, {"module": "http.get", "params": {"url": "https://mirror2.example.com"}}]
mode: race
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://might-fail.example.com"}}]
mode: settle
```

### Limite de Débit

`flow.rate_limit`

Limiter le débit d'exécution en utilisant un seau à jetons ou une fenêtre glissante

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Nombre maximum de requêtes autorisées par fenêtre |
| `window_ms` | number | No | `60000` | Fenêtre temporelle en millisecondes |
| `strategy` | string | No | `token_bucket` | Stratégie de limitation de débit (seau à jetons ou fenêtre glissante) |
| `queue_overflow` | string | No | `wait` | Comportement lorsque la file d'attente est pleine (abandon ou erreur) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Événement pour le routage (autorisé/limité) |
| `tokens_remaining` | number | Jetons restants dans le seau |
| `window_reset_ms` | number | Millisecondes avant la réinitialisation de la fenêtre |
| `requests_in_window` | number | Nombre de requêtes dans la fenêtre actuelle |
| `wait_ms` | number | Millisecondes à attendre avant la prochaine requête autorisée |

**Example:** Example

```yaml
max_requests: 100
window_ms: 60000
strategy: token_bucket
```

**Example:** Example

```yaml
max_requests: 10
window_ms: 1000
strategy: fixed_window
queue_overflow: error
```

**Example:** Example

```yaml
max_requests: 50
window_ms: 30000
strategy: sliding_window
queue_overflow: wait
```

### Réessayer

`flow.retry`

Réessayer les opérations échouées avec un backoff configurable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Nombre maximum de tentatives de réessai |
| `initial_delay_ms` | number | No | `1000` | Délai initial avant le premier réessai en millisecondes |
| `backoff_multiplier` | number | No | `2.0` | Multiplicateur pour le backoff exponentiel |
| `max_delay_ms` | number | No | `30000` | Délai maximum entre les réessais en millisecondes |
| `retry_on_errors` | array | No | `[]` | Types d'erreurs à réessayer (vide signifie réessayer tout) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Événement pour le routage (réessayer/réussi/échoué) |
| `attempt` | number | Numéro de tentative actuel |
| `max_retries` | number | Nombre maximum de réessais configurés |
| `delay_ms` | number | Délai avant la prochaine réessai en millisecondes |
| `total_elapsed_ms` | number | Temps total écoulé en millisecondes |
| `last_error` | object | Dernier message d'erreur |

**Example:** Example

```yaml
max_retries: 3
```

**Example:** Example

```yaml
max_retries: 10
initial_delay_ms: 500
backoff_multiplier: 1.5
max_delay_ms: 10000
```

**Example:** Example

```yaml
max_retries: 5
initial_delay_ms: 2000
retry_on_errors: ["TIMEOUT", "RATE_LIMIT", "429", "503"]
```

### Debut

`flow.start`

Noeud de debut de workflow explicite

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (start) |
| `started_at` | string | Heure de debut |
| `workflow_id` | string | ID du workflow |

**Example:** Example

```yaml
```

### Sous-flux

`flow.subflow`

Referencer et executer un workflow externe

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_ref` | string | Yes | - | Text content to process |
| `execution_mode` | select (`inline`, `spawn`, `async`) | No | `inline` | Select an option |
| `input_mapping` | object | Yes | - | Data object to process |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `timeout` | number | No | `300000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (success/error) |
| `result` | any | Resultat de l'execution |
| `execution_id` | string | ID d'execution |
| `workflow_ref` | string | Reference du workflow |

**Example:** Example

```yaml
workflow_ref: workflows/validate_order
execution_mode: inline
input_mapping: {"order_data": "${input.order}"}
output_mapping: {"validation_result": "result"}
```

**Example:** Example

```yaml
workflow_ref: workflows/send_notifications
execution_mode: spawn
```

### Commutateur

`flow.switch`

Branchement multiple base sur la correspondance de valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (case:value ou default) |
| `outputs` | object | Valeurs de sortie par port |
| `matched_case` | string | Cas correspondant |
| `value` | any | Valeur correspondante |

**Example:** Example

```yaml
expression: ${api_response.status}
cases: [{"id": "case-1", "value": "success", "label": "Success"}, {"id": "case-2", "value": "pending", "label": "Pending"}, {"id": "case-3", "value": "error", "label": "Error"}]
```

**Example:** Example

```yaml
expression: ${input.type}
cases: [{"id": "img", "value": "image", "label": "Image"}, {"id": "vid", "value": "video", "label": "Video"}, {"id": "txt", "value": "text", "label": "Text"}]
```

### Limiter

`flow.throttle`

Limiter le taux d'exécution avec un intervalle minimum

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Temps minimum entre les exécutions en millisecondes |
| `leading` | boolean | No | `True` | Exécuter au bord d'attaque (premier appel passe immédiatement) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Événement pour le routage (exécuté/limité) |
| `last_execution_ms` | number | Horodatage de la dernière exécution autorisée |
| `calls_throttled` | number | Nombre d'appels limités depuis la dernière exécution |
| `time_since_last_ms` | number | Temps écoulé depuis la dernière exécution en millisecondes |
| `remaining_ms` | number | Millisecondes restantes jusqu'à la prochaine exécution autorisée |

**Example:** Example

```yaml
interval_ms: 1000
```

**Example:** Example

```yaml
interval_ms: 200
leading: true
```

**Example:** Example

```yaml
interval_ms: 5000
leading: false
```

### Declencheur

`flow.trigger`

Point d'entree du workflow - manuel, webhook, planifie ou evenement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger_type` | select (`manual`, `webhook`, `schedule`, `event`, `mcp`, `polling`) | No | `manual` | Type of trigger event |
| `webhook_path` | string | No | - | URL path for webhook trigger |
| `schedule` | string | No | - | Cron expression for scheduled trigger |
| `event_name` | string | No | - | Event name to listen for |
| `tool_name` | string | No | - | MCP tool name exposed to AI agents |
| `tool_description` | string | No | - | Description shown to AI agents for this tool |
| `poll_url` | string | No | - | API endpoint to poll for changes |
| `poll_interval` | number | No | `300` | How often to check for changes (minimum 60 seconds) |
| `poll_method` | select (`GET`, `POST`) | No | `GET` | HTTP method for polling request |
| `poll_headers` | object | No | `{}` | Custom headers for polling request (e.g. API keys) |
| `poll_body` | object | No | `{}` | Request body for POST polling |
| `dedup_key` | string | No | - | JSON path to extract a unique value for deduplication |
| `config` | object | No | - | Custom trigger config (for composites: LINE BOT, Telegram, Slack, etc.) |
| `description` | string | No | - | Optional description text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evenement de routage (triggered/error) |
| `trigger_data` | object | Donnees du declencheur |
| `trigger_type` | string | Type de declencheur |
| `triggered_at` | string | Heure de declenchement |

**Example:** Example

```yaml
trigger_type: manual
```

**Example:** Example

```yaml
trigger_type: webhook
webhook_path: /api/webhooks/order-created
```

**Example:** Example

```yaml
trigger_type: schedule
schedule: 0 * * * *
```

**Example:** Example

```yaml
trigger_type: mcp
tool_name: send-report
tool_description: Send a weekly summary report
```

**Example:** Example

```yaml
trigger_type: polling
poll_url: https://api.example.com/items
poll_interval: 300
dedup_key: $.data[0].id
```
