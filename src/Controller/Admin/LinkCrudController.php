<?php

declare(strict_types=1);
namespace App\Controller\Admin;

use App\Entity\Link;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class LinkCrudController extends AbstractCrudController
{
	public static function getEntityFqcn(): string
	{
		return Link::class;
	}

	/**
	 * Configuration for OrderBy 'metLibelle' in 'ASC'
	 */
	public function configureCrud(Crud $crud): Crud
	{
		return $crud
            ->setDefaultSort(['name' => 'ASC'])
            ->setPageTitle('new', 'Ajout d\'un lien')
            ->setPageTitle('index', 'Liste de tous les liens')
        ;
	}

	public function configureFields(string $pageName): iterable
	{
		return [
			TextField::new('name', 'nom'),
			TextField::new('url', 'lien'),
		];
	}
}
