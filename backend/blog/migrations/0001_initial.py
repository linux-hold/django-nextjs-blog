# Generated by Django 4.0.5 on 2022-06-23 20:50

from django.db import migrations, models
import django.db.models.deletion
import froala_editor.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=150, null=True)),
                ('slug', models.SlugField(blank=True, max_length=150, null=True)),
                ('image', models.ImageField(upload_to='public/')),
                ('alt_text', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('slug', models.SlugField(blank=True, max_length=200, null=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('image', models.ImageField(upload_to='public/')),
                ('alt_text', models.CharField(blank=True, max_length=50, null=True)),
                ('status', models.IntegerField(choices=[(0, 'Draft'), (1, 'Publish')], default=0)),
                ('description', froala_editor.fields.FroalaField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='blog.category')),
            ],
            options={
                'ordering': ['-created_on'],
            },
        ),
    ]
