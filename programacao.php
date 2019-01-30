<?php $programacao = $json["programacao"]; ?>
<h3 class="content-titulo">
    <span>Programação</span>
    <span><i class="far fa-window-close" onclick="hideSection()"></i></span>
</h3>
<div class="content-texto">
<div id="timeline">
    <?php foreach($programacao as $atividade): ?>
        <div class="timeline__block">
            <div class="timeline__img">
            <?php if(!empty($atividade['foto'])): ?>
                <img src="img/<?=$atividade['foto']?>" alt="Picture">
            <?php else: ?>
                <i class="fas <?=$atividade['icone']?>"></i>
            <?php endif ?>
            </div>
            <div class="timeline__content">
                <h2><?=$atividade['titulo']?></h2>
                <?php if(!empty($atividade['palestrante'])): ?>
                    <h3><?=$atividade['palestrante']?></h3>
                <?php endif;?>
                <span class="timeline__date"><?=$atividade['hora']?></span>
                <?php if(!empty($atividade['descricao'])): ?>
                <p><?=$atividade['descricao']?></p>
                <i class="timeline__toggle fas fa-arrow-down"></i>
                <?php endif; ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>
</div>