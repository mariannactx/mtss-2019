<div class="timeline__block">
    <div class="timeline__block">
        <div class="timeline__img">
            <i class="fas <?=$atividade['icone']?>"></i>
        </div>
        <div class="timeline__content">
            <h2 class="no-indent"><?=$atividade['titulo']?></h2>
            <h3 class="no-indent"><?=$atividade['palestrante']?></h3>
            <span class="timeline__date no-indent"><?=$atividade['hora']?></span>
            <?php if(!empty($atividade['descricao'])): ?>
            <p class="no-indent"><?=$atividade['descricao']?></p>
            <?php endif; ?>
        </div>
    </div>
</div>
<?php foreach($atividade['palestrantes'] as $id => $tab): ?>
    <div class="timeline__block">
        <div class="timeline__img timeline__tab-btn">
            <img src="img/<?=$tab['foto']?>" alt="Picture">
        </div>
        <div class="timeline__content timeline__tab-content">
            <h2 class="no-indent"><?=$tab['nome']?></h2>
            <h3 class="no-indent"><?=$tab['cargo']?></h3>
            <i class="timeline__toggle fas fa-arrow-down"></i>
            <p class="no-indent"><?=$tab['texto']?></p>
        </div>
    </div>
<?php endforeach ?>