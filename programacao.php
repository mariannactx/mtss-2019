<h3 class="content-titulo">
    <span>Programação</span>
</h3>
<div class="content-texto">
<div id="timeline">
    <?php foreach($programacao as $atividade): ?>
        <?php 
            if(!empty($atividade['palestrantes'])):
                include("mesa-redonda.php");
                continue;
            endif;              
        ?>
        <div class="timeline__block">
            <div class="timeline__img">
            <?php if(!empty($atividade['foto'])): ?>
                <img src="img/<?=$atividade['foto']?>" alt="Picture">
            <?php else: ?>
                <i class="fas <?=$atividade['icone']?>"></i>
            <?php endif ?>
            </div>
            <div class="timeline__content">
                <h2 class="no-indent"><?=$atividade['titulo']?></h2>
                <?php 
                    if(!empty($atividade['palestrante'])){
                        include("contato.php");
                    } 
                ?>
                <span class="timeline__date no-indent"><?=$atividade['hora']?></span>
                <?php if(!empty($atividade['descricao'])): ?>
                <p class="no-indent"><?=$atividade['descricao']?></p>
                <i class="timeline__toggle fas fa-arrow-down"></i>
                <?php endif; ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>
</div>